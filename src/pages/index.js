import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  console.log('f', data)
  return (
    <Layout>
      <h1>Hi people</h1>
      <ul>
        {data.lrvproducts.products.edges.map(product => {
          return <li>{product.node.name}</li>
        })}
      </ul>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

// export const query = graphql`
//   query ProQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

export const query = graphql`
  query ProductsQuery {
    lrvproducts {
      products {
        edges {
          node {
            description
            name
          }
        }
      }
    }
  }
`

export default IndexPage
