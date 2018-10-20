import React from 'react';
import Styled, { injectGlobal } from 'styled-components';

import MainLayout from 'layouts/main';
import GalleryItem from 'components/gallery-item';
import { COLOR_PINK } from 'config/colors';

const Gallery = Styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 275px;
    grid-gap: 10px;

    .hello {
        &:first-of-type {
            grid-column: 1 / 3;
        }
        
        &:nth-of-type(n + 2) {
            grid-column: 2 / 3;
        }

        &:nth-of-type(1000n + 3) {
            grid-column: 3 / 4;
        }

        @media only screen and (max-width: 736px) {
            grid-column: 1 / 4!important;
        }
    }
`;

const GalleryMsg = Styled.div`
    p {
        display: inline-block;
        padding: 5px 5px 15px;
        margin-bottom: 7px;
        background-color: ${COLOR_PINK};
        font-size: 2.5rem;
        color: white;
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
        <p>La Pâtisserie</p>
      </GalleryMsg>
    );
  },
  '5': () => {
    return (
      <GalleryMsg>
        <p>A vôtre image</p>
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
            resize(width: 300, height: 250) {
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
