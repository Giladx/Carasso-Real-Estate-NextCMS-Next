import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabDPageInitialPropsTqJxResource from '../../resources/tab_d-page-initial-props-tq_jx'

const Tabd1 = (props) => {
  return (
    <>
      <div className="tabd1-container">
        <Head>
          <title>Tabd1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabd1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabd1-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_dEntities) => (
                    <>
                      <div className="tabd1-container2">
                        <span>{Tab_dEntities?.tabTypeD}</span>
                        <span>{Tab_dEntities?.tabNameD}</span>
                        <span>{Tab_dEntities?.tabTitleD}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabDEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabd1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabd1-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabd1-container2 {
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

Tabd1.defaultProps = {
  tabDEntities: [],
}

Tabd1.propTypes = {
  tabDEntities: PropTypes.array,
}

export default Tabd1

export async function getStaticProps(context) {
  try {
    const response = await tabDPageInitialPropsTqJxResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabDEntities: response,
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
