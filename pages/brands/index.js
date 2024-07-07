import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import brandsPageInitialPropsTqRkResource from '../../resources/brands-page-initial-props-tq_rk'

const Brands1 = (props) => {
  return (
    <>
      <div className="brands1-container">
        <Head>
          <title>Brands1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Brands1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="brands1-container1">
                <Repeater
                  items={params}
                  renderItem={(BrandsEntities) => (
                    <>
                      <div className="brands1-container2">
                        <span>{BrandsEntities?.brandName}</span>
                        <span>{BrandsEntities?.brandSlogan}</span>
                        <span>{BrandsEntities?.cityC}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.brandsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .brands1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .brands1-container1 {
            display: flex;
            flex-direction: column;
          }
          .brands1-container2 {
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

Brands1.defaultProps = {
  brandsEntities: [],
}

Brands1.propTypes = {
  brandsEntities: PropTypes.array,
}

export default Brands1

export async function getStaticProps(context) {
  try {
    const response = await brandsPageInitialPropsTqRkResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        brandsEntities: response,
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
