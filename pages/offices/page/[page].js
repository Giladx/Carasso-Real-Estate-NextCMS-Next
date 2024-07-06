import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import officesPageInitialPropsTq3xResource from '../../../resources/offices-page-initial-props-tq_3x'
import officesPageInitialPathsTqQNResource from '../../../resources/offices-page-initial-paths-tq_q-n'

const Offices1 = (props) => {
  return (
    <>
      <div className="offices1-container">
        <Head>
          <title>Offices - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Offices - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="offices1-container1">
                <Repeater
                  items={params}
                  renderItem={(OfficesEntities) => (
                    <>
                      <div className="offices1-container2">
                        <span>{OfficesEntities?.brandName}</span>
                        <span>{OfficesEntities?.brandSlogan}</span>
                        <span>{OfficesEntities?.cityC}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.officesEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .offices1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .offices1-container1 {
            display: flex;
            flex-direction: column;
          }
          .offices1-container2 {
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

Offices1.defaultProps = {
  officesEntities: [],
}

Offices1.propTypes = {
  officesEntities: PropTypes.array,
}

export default Offices1

export async function getStaticProps(context) {
  try {
    const response = await officesPageInitialPropsTq3xResource({
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
        officesEntities: response,
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
    const response = await officesPageInitialPathsTqQNResource({
      content_type: 'offices',
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
