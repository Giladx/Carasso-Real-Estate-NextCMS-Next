import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabFPageInitialPropsTqUxResource from '../../resources/tab_f-page-initial-props-tq_ux'

const Tabf = (props) => {
  return (
    <>
      <div className="tabf-container">
        <Head>
          <title>Tabf - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabf - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabf-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_fEntities) => (
                    <>
                      <div className="tabf-container2">
                        <span>{Tab_fEntities?.tabTypeF}</span>
                        <span>{Tab_fEntities?.tabNameF}</span>
                        <span>{Tab_fEntities?.tabSubtitleF}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabFEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabf-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabf-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabf-container2 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Tabf.defaultProps = {
  tabFEntities: [],
}

Tabf.propTypes = {
  tabFEntities: PropTypes.array,
}

export default Tabf

export async function getStaticProps(context) {
  try {
    const response = await tabFPageInitialPropsTqUxResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabFEntities: response,
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
