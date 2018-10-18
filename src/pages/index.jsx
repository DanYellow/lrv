import React from 'react';
import Styled from 'styled-components';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/main';
import { List, ListImageTitle } from 'components/templates';

import { COLOR_PINK } from 'config/colors';

const ListWrapper = Styled.div`
  display: flex
`;

const Separator = Styled.section`
  padding: 5px;
  margin: 19px auto;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    left: 40%;
    right: 40%;
    top: 50%;
    height: 1px;
    position: absolute;
    transform: translateY(-50%);
    background: ${COLOR_PINK};
    z-index: -1;
  }

  span {
    font-weight: bold;
    background: #fbf5fd;
    padding: 0 10px;
  }
`;

const IndexPage = ({ data }) => {
  const { saveurs, glacages, cupcakesMaison } = data.lrvproducts;
  return (
    <MainLayout pageTitle="Services">
      <ListWrapper>
        <List
          title={saveurs.edges[0].node.type.description}
          list={saveurs.edges}
        />

        <List
          title={glacages.edges[0].node.type.description}
          list={glacages.edges}
        />
      </ListWrapper>
      <Separator>
        <span>OU</span>
      </Separator>
      <ListImageTitle
        list={cupcakesMaison.edges}
        description={cupcakesMaison.edges[0].node.type.description}
      />
    </MainLayout>
  );
};

export const query = graphql`
  query ProductsQuery {
    lrvproducts {
      verrines: products(type_slug: "verrine", enabled: true) {
        edges {
          node {
            ...product
          }
        }
      }
      saveurs: products(type_slug: "saveur", enabled: true) {
        edges {
          node {
            ...product
          }
        }
      }
      glacages: products(type_slug: "glacage", enabled: true) {
        edges {
          node {
            ...product
          }
        }
      }
      cupcakesMaison: products(type_slug: "cupcake-maison", enabled: true) {
        edges {
          node {
            ...product
          }
        }
      }
    }
  }

  fragment product on LRVProducts_Product {
    id
    name
    description
    price
    type {
      slug
      description
      price
    }
  }
`;

export default IndexPage;
