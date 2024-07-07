import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabDPageInitialPropsTqXpResource from '../../../resources/tab_d-page-initial-props-tq_xp'
import tabDPageInitialPathsTqMzResource from '../../../resources/tab_d-page-initial-paths-tq_mz'

const Tabd11 = (props) => {
  return (
    <>
      <div className="tabd11-container">
        <Head>
          <title>Tabd1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabd1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabd11-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_dEntities) => (
                    <>
                      <div className="tabd11-container2">
                        <span>{Tab_dEntities?.tabTypeD}</span>
                        <span>{Tab_dEntities?.tabNameD}</span>
                        <span>{Tab_dEntities?.tabTitleD}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabDEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabd11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabd11-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabd11-container2 {
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

Tabd11.defaultProps = {
  tabDEntities: [],
}

Tabd11.propTypes = {
  tabDEntities: PropTypes.array,
}

export default Tabd11

export async function getStaticProps(context) {
  try {
    const response = await tabDPageInitialPropsTqXpResource({
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
        tabDEntities: response,
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
    const response = await tabDPageInitialPathsTqMzResource({
      content_type: 'tabD',
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
