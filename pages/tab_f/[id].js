import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabFPageInitialPropsTq5oResource from '../../resources/tab_f-page-initial-props-tq_5o'
import tabFPageInitialPathsTqItResource from '../../resources/tab_f-page-initial-paths-tq_it'

const Tabf11 = (props) => {
  return (
    <>
      <div className="tabf11-container">
        <Head>
          <title>Tabf1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabf1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(Tab_fEntity) => (
            <>
              <div className="tabf11-container1">
                <span>{Tab_fEntity?.tabTypeF}</span>
                <span>{Tab_fEntity?.tabNameF}</span>
                <span>{Tab_fEntity?.tabSubtitleF}</span>
              </div>
            </>
          )}
          initialData={props.tabFEntity}
          persistDataDuringLoading={true}
          key={props?.tabFEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .tabf11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabf11-container1 {
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

Tabf11.defaultProps = {
  tabFEntity: [],
}

Tabf11.propTypes = {
  tabFEntity: PropTypes.array,
}

export default Tabf11

export async function getStaticProps(context) {
  try {
    const response = await tabFPageInitialPropsTq5oResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabFEntity: response?.data?.[0],
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
    const response = await tabFPageInitialPathsTqItResource({
      content_type: 'tabF',
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
