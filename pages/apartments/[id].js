import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import apartmentsPageInitialPropsTq44Resource from '../../resources/apartments-page-initial-props-tq_44'
import apartmentsPageInitialPathsTqZLResource from '../../resources/apartments-page-initial-paths-tq_z-l'

const Apartments = (props) => {
  return (
    <>
      <div className="apartments-container">
        <Head>
          <title>Apartments - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Apartments - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(ApartmentsEntity) => (
            <>
              <div className="apartments-container1">
                <span>{ApartmentsEntity?.mainTitle}</span>
                <span>{ApartmentsEntity?.mainBoldTitle}</span>
                <span>{ApartmentsEntity?.descriptionC}</span>
              </div>
            </>
          )}
          initialData={props.apartmentsEntity}
          persistDataDuringLoading={true}
          key={props?.apartmentsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .apartments-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .apartments-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Apartments.defaultProps = {
  apartmentsEntity: [],
}

Apartments.propTypes = {
  apartmentsEntity: PropTypes.array,
}

export default Apartments

export async function getStaticProps(context) {
  try {
    const response = await apartmentsPageInitialPropsTq44Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        apartmentsEntity: response?.data?.[0],
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
    const response = await apartmentsPageInitialPathsTqZLResource({
      content_type: 'apartments',
      select: 'sys.id',
    })
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            id: (item?.sys?.id).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
