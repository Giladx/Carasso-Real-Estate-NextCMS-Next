import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabDPageInitialPropsTqGuResource from '../../resources/tab_d-page-initial-props-tq_gu'
import tabDPageInitialPathsTqQdResource from '../../resources/tab_d-page-initial-paths-tq_qd'

const Tabd = (props) => {
  return (
    <>
      <div className="tabd-container">
        <Head>
          <title>Tabd - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabd - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(Tab_dEntity) => (
            <>
              <div className="tabd-container1">
                <span>{Tab_dEntity?.tabTypeD}</span>
                <span>{Tab_dEntity?.tabNameD}</span>
                <span>{Tab_dEntity?.tabTitleD}</span>
              </div>
            </>
          )}
          initialData={props.tabDEntity}
          persistDataDuringLoading={true}
          key={props?.tabDEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .tabd-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabd-container1 {
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

Tabd.defaultProps = {
  tabDEntity: [],
}

Tabd.propTypes = {
  tabDEntity: PropTypes.array,
}

export default Tabd

export async function getStaticProps(context) {
  try {
    const response = await tabDPageInitialPropsTqGuResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabDEntity: response?.data?.[0],
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
    const response = await tabDPageInitialPathsTqQdResource({
      content_type: 'tabD',
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
