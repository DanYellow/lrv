import React from 'react';
import Styled from 'styled-components';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/main';
import { List, ListImageTitle } from 'components/templates';

import { COLOR_PINK } from 'config/colors';

const ListWrapper = Styled.div`
  display: flex;
  
  @media only screen and (max-width: 736px) {
    flex-direction: column;
  }
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
        <List title={saveurs[0].type.description} list={saveurs} />
        <List title={glacages[0].type.description} list={glacages} />
      </ListWrapper>
      <Separator>
        <span>OU</span>
      </Separator>
      <ListImageTitle
        list={cupcakesMaison}
        galleryItems={data.galleryItems.edges}
        description={cupcakesMaison[0].type.description}
      />
    </MainLayout>
  );
};

export const query = graphql`
  query IndexQueries {
    lrvproducts {
      verrines: products(type_slug: "verrine", enabled: true) {
        ...product
      }
      saveurs: products(type_slug: "saveur", enabled: true) {
        ...product
      }
      glacages: products(type_slug: "glacage", enabled: true) {
        ...product
      }
      cupcakesMaison: products(type_slug: "cupcake-maison", enabled: true) {
        ...product
      }
    }

    galleryItems: allFile(
      filter: { fields: { name: { regex: "/.(png|jpg)$/" } } }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 350) {
              src
            }
          }
          fields {
            name
            originalName
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
    image {
      name: image
    }

    type {
      slug
      description
      price
    }
  }
`;

export default IndexPage;
