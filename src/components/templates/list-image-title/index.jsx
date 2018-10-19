import React from 'react';
import { find } from 'lodash';
import Styled from 'styled-components';
import ImageTitle from 'components/templates/image-title';

const ImageTitleWrapper = Styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 2px;
`;

const ImageTitleItem = Styled.li`
  flex: 33% 1 1;
  padding: 2px;
  margin-bottom: 30px;
  flex-grow: 0;


  @media only screen and (min-width: 737px) and (max-width: 1024px) and (orientation: landscape),
    screen and (max-width: 736px) and (orientation: landscape) {
    flex: 50%;
  }

  @media only screen and (max-width: 736px) and (orientation: portrait) {
    flex: 100%;
  }
`;

export default ({ title, list, galleryItems }) => {
  return (
    <ImageTitleWrapper>
      {list.map(item => {
        const imageObj = find(galleryItems, [
          'node.fields.originalName',
          item.image.name,
        ]);
        const image = imageObj?.node.childImageSharp.fixed.src;

        const data = {
          id: item.id,
          name: item.name,
          description: item.description,
          image,
        };

        return (
          <ImageTitleItem key={data.id}>
            <ImageTitle {...data} />
          </ImageTitleItem>
        );
      })}
    </ImageTitleWrapper>
  );
};
