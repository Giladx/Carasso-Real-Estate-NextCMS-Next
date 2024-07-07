import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import apartmentsPageInitialPropsTq4dResource from '../../resources/apartments-page-initial-props-tq_4d'

const Apartments1 = (props) => {
  return (
    <>
      <div className="apartments1-container">
        <Head>
          <title>Apartments1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Apartments1 - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="apartments1-container1">
                <Repeater
                  items={params}
                  renderItem={(ApartmentsEntities) => (
                    <>
                      <div className="apartments1-container2">
                        <span>{ApartmentsEntities?.mainTitle}</span>
                        <span>{ApartmentsEntities?.mainBoldTitle}</span>
                        <span>{ApartmentsEntities?.descriptionC}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.apartmentsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .apartments1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .apartments1-container1 {
            display: flex;
            flex-direction: column;
          }
          .apartments1-container2 {
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

Apartments1.defaultProps = {
  apartmentsEntities: [],
}

Apartments1.propTypes = {
  apartmentsEntities: PropTypes.array,
}

export default Apartments1

export async function getStaticProps(context) {
  try {
    const response = await apartmentsPageInitialPropsTq4dResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        apartmentsEntities: response,
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
