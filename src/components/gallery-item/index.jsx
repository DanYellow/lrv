import React from 'react';
import Styled from 'styled-components';

const GalleryItem = Styled.div.attrs({
  'data-gallery-item': '',
})`
    figure {
        height: 100%;
        overflow: hidden;
    }

    img {
        width: 100%;
        object-fit: cover;
    }
`;

export default props => {
  return (
    <GalleryItem>
      <figure>
        <img src={props.childImageSharp.resize.src} alt="" />
      </figure>
    </GalleryItem>
  );
};
