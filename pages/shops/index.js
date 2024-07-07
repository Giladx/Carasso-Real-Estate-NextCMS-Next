import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import shopsPageInitialPropsTq4bResource from '../../resources/shops-page-initial-props-tq_4b'

const Shops = (props) => {
  return (
    <>
      <div className="shops-container">
        <Head>
          <title>Shops - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Shops - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="shops-container1">
                <Repeater
                  items={params}
                  renderItem={(ShopsEntities) => (
                    <>
                      <div className="shops-container2">
                        <span>{ShopsEntities?.shopTitle}</span>
                        <span>{ShopsEntities?.shopPhone}</span>
                        <span>{ShopsEntities?.shopOpeningHours}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.shopsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .shops-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .shops-container1 {
            display: flex;
            flex-direction: column;
          }
          .shops-container2 {
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

Shops.defaultProps = {
  shopsEntities: [],
}

Shops.propTypes = {
  shopsEntities: PropTypes.array,
}

export default Shops

export async function getStaticProps(context) {
  try {
    const response = await shopsPageInitialPropsTq4bResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        shopsEntities: response,
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
