import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import postsPageInitialPropsTq3qResource from '../../../resources/posts-page-initial-props-tq_3q'
import postsPageInitialPathsTqGcResource from '../../../resources/posts-page-initial-paths-tq_gc'

const Posts11 = (props) => {
  return (
    <>
      <div className="posts11-container">
        <Head>
          <title>Posts1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Posts1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="posts11-container1">
                <Repeater
                  items={params}
                  renderItem={(PostsEntities) => (
                    <>
                      <div className="posts11-container2">
                        <span>{PostsEntities?.articleTitle}</span>
                        <span>{PostsEntities?.slug}</span>
                        <span>{PostsEntities?.category}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.postsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .posts11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .posts11-container1 {
            display: flex;
            flex-direction: column;
          }
          .posts11-container2 {
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

Posts11.defaultProps = {
  postsEntities: [],
}

Posts11.propTypes = {
  postsEntities: PropTypes.array,
}

export default Posts11

export async function getStaticProps(context) {
  try {
    const response = await postsPageInitialPropsTq3qResource({
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
        postsEntities: response,
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
    const response = await postsPageInitialPathsTqGcResource({
      content_type: 'posts',
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
