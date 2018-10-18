import React, { Fragment } from 'react';
import styled from 'styled-components';

const ImageTitle = styled.div`
  font-family: 'latoregular';

  p {
    margin-top: 3px;
  }
`;

const Title = styled.figcaption`
  font-size: 1.2rem;
  position: absolute;
  bottom: 0;
  color: white;
  background-color: #d82383;
  padding: 5px;
  border-bottom: 2px solid rgb(112, 3, 61);
`;

const Image = styled.figure`
  position: relative;
  margin-bottom: 7px;

  img {
    width: 100%;
  }
`;

export default ({ name, description, image }) => (
  <ImageTitle>
    <Image>
      <img src={image} alt="" />
      <Title>{name}</Title>
    </Image>
    <p>{description}</p>
  </ImageTitle>
);
