import React from 'react'
import { Link, graphql } from 'gatsby'

import MainLayout from 'layouts/main'

const IndexPage = ({ data }) => {
  return (
    <MainLayout pageTitle="Bienvenue !">
      <ul>
        {data.lrvproducts.products.edges.map(product => {
          return <li key={product.node.name}>{product.node.name}</li>
        })}
      </ul>
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
