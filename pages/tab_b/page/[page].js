import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabBPageInitialPropsTqMUResource from '../../../resources/tab_b-page-initial-props-tq_m-u'
import tabBPageInitialPathsTqYsResource from '../../../resources/tab_b-page-initial-paths-tq_ys'

const Tabb11 = (props) => {
  return (
    <>
      <div className="tabb11-container">
        <Head>
          <title>Tabb1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabb1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabb11-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_bEntities) => (
                    <>
                      <div className="tabb11-container2">
                        <span>{Tab_bEntities?.tabNameTypeB}</span>
                        <span>{Tab_bEntities?.featuredTitle1B}</span>
                        <span>{Tab_bEntities?.featuredDescription1B}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabBEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabb11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabb11-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabb11-container2 {
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

Tabb11.defaultProps = {
  tabBEntities: [],
}

Tabb11.propTypes = {
  tabBEntities: PropTypes.array,
}

export default Tabb11

export async function getStaticProps(context) {
  try {
    const response = await tabBPageInitialPropsTqMUResource({
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
        tabBEntities: response,
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
    const response = await tabBPageInitialPathsTqYsResource({
      content_type: 'tabB',
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
