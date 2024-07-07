import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabCPageInitialPropsTqIzResource from '../../resources/tab_c-page-initial-props-tq_iz'
import tabCPageInitialPathsTqYqResource from '../../resources/tab_c-page-initial-paths-tq_yq'

const Tabc11 = (props) => {
  return (
    <>
      <div className="tabc11-container">
        <Head>
          <title>Tabc1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabc1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(Tab_cEntity) => (
            <>
              <div className="tabc11-container1">
                <span>{Tab_cEntity?.tabNameC}</span>
                <span>{Tab_cEntity?.tabDescriptionC}</span>
                <span>{Tab_cEntity?.id}</span>
              </div>
            </>
          )}
          initialData={props.tabCEntity}
          persistDataDuringLoading={true}
          key={props?.tabCEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .tabc11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabc11-container1 {
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

Tabc11.defaultProps = {
  tabCEntity: [],
}

Tabc11.propTypes = {
  tabCEntity: PropTypes.array,
}

export default Tabc11

export async function getStaticProps(context) {
  try {
    const response = await tabCPageInitialPropsTqIzResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabCEntity: response?.data?.[0],
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
    const response = await tabCPageInitialPathsTqYqResource({
      content_type: 'tabC',
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
