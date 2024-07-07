import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import staffPageInitialPropsTqQsResource from '../../resources/staff-page-initial-props-tq_qs'

const Staff1 = (props) => {
  return (
    <>
      <div className="staff1-container">
        <Head>
          <title>Staff1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Staff1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="staff1-container1">
                <Repeater
                  items={params}
                  renderItem={(StaffEntities) => (
                    <>
                      <div className="staff1-container2">
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
          .staff1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .staff1-container1 {
            display: flex;
            flex-direction: column;
          }
          .staff1-container2 {
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

Staff1.defaultProps = {
  staffEntities: [],
}

Staff1.propTypes = {
  staffEntities: PropTypes.array,
}

export default Staff1

export async function getStaticProps(context) {
  try {
    const response = await staffPageInitialPropsTqQsResource({
      ...context?.params,
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
