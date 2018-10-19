import React from 'react';
import Styled from 'styled-components';
import { set } from 'lodash';

import MainLayout from 'layouts/main';
import GalleryItem from 'components/gallery-item';

const Gallery = Styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 275px;
    grid-gap: 10px;

    [data-gallery-item] {
        &:nth-of-type(1) {
            grid-column: 1 / 3;
        }
        &:nth-of-type(2) {
            grid-column: 2 / 3;
        }
    }
`;

const GalleryMsg = Styled.div`
    p {
        font-size: 1.5rem;
    }
`;

const galleryTextsComponents = {
  '1': () => {
    return (
      <GalleryMsg>
        <p>La rose veloutée</p>
      </GalleryMsg>
    );
  },
  '2': () => {
    return (
      <GalleryMsg>
        <p>De La</p>
        <p>Pâtisserie</p>
      </GalleryMsg>
    );
  },
};

const insertGalleryTexts = arr => {
  const copyArray = [...arr];
  Object.keys(galleryTextsComponents).forEach(idx => {
    copyArray.splice(Number(idx), 0, '');
  });
  return [...copyArray];
};

const GaleriePage = ({ data }) => {
  const galleryItems = insertGalleryTexts(data.galleryItems.edges);

  return (
    <MainLayout pageTitle="Galerie">
      <Gallery>
        {galleryItems.map((item, idx) => {
          const { node } = item;
          if (galleryTextsComponents[String(idx)] && !node) {
            const TextComponent = galleryTextsComponents[String(idx)];
            return <TextComponent />;
          }
          return <GalleryItem key={node.id} {...node} />;
        })}
      </Gallery>
    </MainLayout>
  );
};

export const query = graphql`
  query GalleryQueries {
    galleryItems: allFile(
      filter: { fields: { name: { regex: "/.(png|jpg)$/" } } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            resize(width: 500) {
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
`;

export default GaleriePage;
