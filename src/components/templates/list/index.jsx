import React from 'react';
import Styled from 'styled-components';

import { COLOR_PINK } from 'config/colors';

const bulletSize = 8;
const ListContainer = Styled.div`
    flex: 50%;
    padding: 2px;
    
    @media only screen and (min-width: 737px) and (max-width: 1024px) {
        margin-bottom: 17px;
        flex: 100%;
    }

    p {
        font-weight: bold;
        margin-bottom: 10px;
    }

    li {
        &:before {
            content: '';
            width: ${bulletSize}px;
            height: ${bulletSize}px;
            display: inline-block;
            background-color: ${COLOR_PINK};
            border-radius: 50%;
            margin-right: 10px;
            margin-bottom: 5px;
            vertical-align: middle;
        }
    }
`;

export default ({ title, list }) => (
  <ListContainer>
    <p>{title}</p>
    <ul>
      {list.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </ListContainer>
);
