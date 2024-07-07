import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import authorsPageInitialPropsTqK9Resource from '../../../resources/authors-page-initial-props-tq_k9'
import authorsPageInitialPathsTqXoResource from '../../../resources/authors-page-initial-paths-tq_xo'

const Authors11 = (props) => {
  return (
    <>
      <div className="authors11-container">
        <Head>
          <title>Authors1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Authors1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="authors11-container1">
                <Repeater
                  items={params}
                  renderItem={(AuthorsEntities) => (
                    <>
                      <div className="authors11-container2">
                        <h1>{AuthorsEntities?.name}</h1>
                        <span>{AuthorsEntities?.name}</span>
                        <span>{AuthorsEntities?.email}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.authorsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .authors11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .authors11-container1 {
            display: flex;
            flex-direction: column;
          }
          .authors11-container2 {
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

Authors11.defaultProps = {
  authorsEntities: [],
}

Authors11.propTypes = {
  authorsEntities: PropTypes.array,
}

export default Authors11

export async function getStaticProps(context) {
  try {
    const response = await authorsPageInitialPropsTqK9Resource({
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
        authorsEntities: response,
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
    const response = await authorsPageInitialPathsTqXoResource({
      content_type: 'authors',
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
