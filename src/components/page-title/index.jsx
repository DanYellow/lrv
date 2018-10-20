import React from 'react';
import Styled from 'styled-components';

const PageTitle = Styled.section`
    position: relative;
    max-width: 985px;
    margin: 0 auto;
    border-top: 5px solid #D82383;
    margin-bottom: 30px !important;

    @media only screen and (max-width: 768px) {
        margin: 0 15px;
    }

    h1 {
        position: absolute;
        top: -60px;
        padding: 7px 40px 7px 7px;
        background-color: #D82383;
        color: white;
        font-weight: bold;
        font-size: 2rem;
        z-index: 9;
    }
`;

export default ({ title }) => (
  <PageTitle>
    <h1>{title}</h1>
  </PageTitle>
);
