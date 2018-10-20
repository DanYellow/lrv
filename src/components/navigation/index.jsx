import React from 'react';
import styled from 'styled-components';
import { COLOR_PINK } from 'config/colors';
import Link from 'gatsby-link';

const Navigation = styled.nav`
  width: 100%;
  max-width: 950px;
  margin: 25px auto;
  color: white;
  z-index: 2;
  position: relative;
  font-size: 1.3rem;

  ul {
    display: flex;

    @media only screen and (max-width: 736px) {
      justify-content: space-around;
      width: 100%;
    }

    li {
      margin-right: 10px;
    }

    a {
      color: white;

      @media only screen and (min-width: 1025px) {
        &:hover,
        &:active {
          &:after {
            transform: scaleX(1);
          }
        }
      }

      &.activate {
        &:after {
          content: '';
          transform: scaleX(1) !important;
          display: block;
          transform-origin: center left;
          transition: transform 0.25s;
          height: 3px;
          margin-top: 5px;
          background-color: #d82383 !important;
        }
      }

      &:after {
        content: '';
        transform: scaleX(0);
        display: block;
        transform-origin: center left;
        transition: transform 0.25s;
        height: 3px;
        margin-top: 5px;
        background-color: ${COLOR_PINK};
      }
    }
  }
`;

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: 'activate' } : null;

export default props => {
  return (
    <Navigation>
      <ul>
        <li>
          <Link to="/" activeClassName="activate" exact>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/galerie/" activeClassName="activate">
            Galerie
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="activate" exact>
            Contact
          </Link>
        </li>
      </ul>
    </Navigation>
  );
};
