import React from 'react'
import { Link, graphql } from 'gatsby'

import MainLayout from 'layouts/main'

const IndexPage = ({ data }) => {
  return (
    <MainLayout>
      <h1>Hi people</h1>
      <ul>
        {data.lrvproducts.products.edges.map(product => {
          return <li key={product.node.name}>{product.node.name}</li>
        })}
      </ul>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </MainLayout>
  )
}

export const query = graphql`
  query ProductsQuery {
    lrvproducts {
      products(enabled: true) {
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
