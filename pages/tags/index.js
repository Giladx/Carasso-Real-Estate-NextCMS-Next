import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tagsPageInitialPropsTqCRResource from '../../resources/tags-page-initial-props-tq_c-r'

const Tags = (props) => {
  return (
    <>
      <div className="tags-container">
        <Head>
          <title>Tags - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tags - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tags-container1">
                <Repeater
                  items={params}
                  renderItem={(TagsEntities) => (
                    <>
                      <div className="tags-container2">
                        <span>{TagsEntities?.tagName}</span>
                        <span>{TagsEntities?.id}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tagsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tags-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tags-container1 {
            display: flex;
            flex-direction: column;
          }
          .tags-container2 {
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

Tags.defaultProps = {
  tagsEntities: [],
}

Tags.propTypes = {
  tagsEntities: PropTypes.array,
}

export default Tags

export async function getStaticProps(context) {
  try {
    const response = await tagsPageInitialPropsTqCRResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tagsEntities: response,
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
