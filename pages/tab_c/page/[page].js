import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabCPageInitialPropsTqMResource from '../../../resources/tab_c-page-initial-props-tq__m'
import tabCPageInitialPathsTq50Resource from '../../../resources/tab_c-page-initial-paths-tq_50'

const Tabc1 = (props) => {
  return (
    <>
      <div className="tabc1-container">
        <Head>
          <title>Tabc - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabc - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabc1-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_cEntities) => (
                    <>
                      <div className="tabc1-container2">
                        <span>{Tab_cEntities?.tabNameC}</span>
                        <span>{Tab_cEntities?.tabDescriptionC}</span>
                        <span>{Tab_cEntities?.id}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabCEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabc1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabc1-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabc1-container2 {
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

Tabc1.defaultProps = {
  tabCEntities: [],
}

Tabc1.propTypes = {
  tabCEntities: PropTypes.array,
}

export default Tabc1

export async function getStaticProps(context) {
  try {
    const response = await tabCPageInitialPropsTqMResource({
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
        tabCEntities: response,
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
    const response = await tabCPageInitialPathsTq50Resource({
      content_type: 'tabC',
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
