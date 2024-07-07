import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import officesPageInitialPropsTqTqResource from '../../resources/offices-page-initial-props-tq_tq'
import officesPageInitialPathsTqE6Resource from '../../resources/offices-page-initial-paths-tq_e6'

const Offices11 = (props) => {
  return (
    <>
      <div className="offices11-container">
        <Head>
          <title>Offices1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Offices1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(OfficesEntity) => (
            <>
              <div className="offices11-container1">
                <span>{OfficesEntity?.brandName}</span>
                <span>{OfficesEntity?.brandSlogan}</span>
                <span>{OfficesEntity?.cityC}</span>
              </div>
            </>
          )}
          initialData={props.officesEntity}
          persistDataDuringLoading={true}
          key={props?.officesEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .offices11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .offices11-container1 {
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

Offices11.defaultProps = {
  officesEntity: [],
}

Offices11.propTypes = {
  officesEntity: PropTypes.array,
}

export default Offices11

export async function getStaticProps(context) {
  try {
    const response = await officesPageInitialPropsTqTqResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        officesEntity: response?.data?.[0],
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
    const response = await officesPageInitialPathsTqE6Resource({
      content_type: 'offices',
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
