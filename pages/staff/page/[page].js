import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import staffPageInitialPropsTqY5Resource from '../../../resources/staff-page-initial-props-tq_y5'
import staffPageInitialPathsTqWjResource from '../../../resources/staff-page-initial-paths-tq_wj'

const Staff11 = (props) => {
  return (
    <>
      <div className="staff11-container">
        <Head>
          <title>Staff1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Staff1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="staff11-container1">
                <Repeater
                  items={params}
                  renderItem={(StaffEntities) => (
                    <>
                      <div className="staff11-container2">
                        <span>{StaffEntities?.fullName}</span>
                        <span>{StaffEntities?.jobTitle}</span>
                        <span>{StaffEntities?.id}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.staffEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .staff11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .staff11-container1 {
            display: flex;
            flex-direction: column;
          }
          .staff11-container2 {
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

Staff11.defaultProps = {
  staffEntities: [],
}

Staff11.propTypes = {
  staffEntities: PropTypes.array,
}

export default Staff11

export async function getStaticProps(context) {
  try {
    const response = await staffPageInitialPropsTqY5Resource({
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
        staffEntities: response,
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
    const response = await staffPageInitialPathsTqWjResource({
      content_type: 'staff',
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
