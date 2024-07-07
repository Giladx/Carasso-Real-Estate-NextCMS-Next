import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import officesPageInitialPropsTqSPResource from '../../resources/offices-page-initial-props-tq_s-p'

const Offices = (props) => {
  return (
    <>
      <div className="offices-container">
        <Head>
          <title>Offices - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Offices - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="offices-container1">
                <Repeater
                  items={params}
                  renderItem={(OfficesEntities) => (
                    <>
                      <div className="offices-container2">
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
          .offices-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .offices-container1 {
            display: flex;
            flex-direction: column;
          }
          .offices-container2 {
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

Offices.defaultProps = {
  officesEntities: [],
}

Offices.propTypes = {
  officesEntities: PropTypes.array,
}

export default Offices

export async function getStaticProps(context) {
  try {
    const response = await officesPageInitialPropsTqSPResource({
      ...context?.params,
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
