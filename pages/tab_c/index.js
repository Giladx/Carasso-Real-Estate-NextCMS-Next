import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabCPageInitialPropsTqAaResource from '../../resources/tab_c-page-initial-props-tq_aa'

const Tabc = (props) => {
  return (
    <>
      <div className="tabc-container">
        <Head>
          <title>Tabc - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabc - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabc-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_cEntities) => (
                    <>
                      <div className="tabc-container2">
                        <span>{Tab_cEntities?.tabNameC}</span>
                        <span>{Tab_cEntities?.tabDescriptionC}</span>
                        <span>{Tab_cEntities?.id}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabCEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabc-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabc-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabc-container2 {
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

Tabc.defaultProps = {
  tabCEntities: [],
}

Tabc.propTypes = {
  tabCEntities: PropTypes.array,
}

export default Tabc

export async function getStaticProps(context) {
  try {
    const response = await tabCPageInitialPropsTqAaResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabCEntities: response,
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
