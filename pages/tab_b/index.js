import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabBPageInitialPropsTqKvResource from '../../resources/tab_b-page-initial-props-tq_kv'

const Tabb1 = (props) => {
  return (
    <>
      <div className="tabb1-container">
        <Head>
          <title>Tabb1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabb1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabb1-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_bEntities) => (
                    <>
                      <div className="tabb1-container2">
                        <span>{Tab_bEntities?.tabNameTypeB}</span>
                        <span>{Tab_bEntities?.featuredTitle1B}</span>
                        <span>{Tab_bEntities?.featuredDescription1B}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabBEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabb1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabb1-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabb1-container2 {
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

Tabb1.defaultProps = {
  tabBEntities: [],
}

Tabb1.propTypes = {
  tabBEntities: PropTypes.array,
}

export default Tabb1

export async function getStaticProps(context) {
  try {
    const response = await tabBPageInitialPropsTqKvResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabBEntities: response,
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
