import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import brandsPageInitialPropsTqBResource from '../../../resources/brands-page-initial-props-tq_b_'
import brandsPageInitialPathsTqYjResource from '../../../resources/brands-page-initial-paths-tq_yj'

const Brands11 = (props) => {
  return (
    <>
      <div className="brands11-container">
        <Head>
          <title>Brands1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Brands1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="brands11-container1">
                <Repeater
                  items={params}
                  renderItem={(BrandsEntities) => (
                    <>
                      <div className="brands11-container2">
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
          .brands11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .brands11-container1 {
            display: flex;
            flex-direction: column;
          }
          .brands11-container2 {
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

Brands11.defaultProps = {
  brandsEntities: [],
}

Brands11.propTypes = {
  brandsEntities: PropTypes.array,
}

export default Brands11

export async function getStaticProps(context) {
  try {
    const response = await brandsPageInitialPropsTqBResource({
      ...context?.params,
      skip: (context.params.page - 1) * 10,
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

export async function getStaticPaths() {
  try {
    const response = await brandsPageInitialPathsTqYjResource({
      content_type: 'brands',
    })
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
