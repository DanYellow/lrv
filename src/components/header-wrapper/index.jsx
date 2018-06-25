import styled from 'styled-components'
import React, { Fragment } from 'react'

import Navigation from 'components/navigation'

import logo from './logo-white.png'
import bgImage from 'components/header-hero/image3.jpg'

const Header = styled.header`
    position: relative;
    overflow: hidden;
    background-image: url(${bgImage});
    width: 100%;
    height: 45vh;
    background-size: cover;

    &:after {
        content: '';
        background-color: rgba(0, 0, 0, .5);
        top: 0; left: 0; 
        right: 0; bottom: 0;
        position: absolute;
        z-index: 0;
    }
`

const Logo = styled.div`
    position: absolute;
    z-index: 7;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    top: 20%;
    color: white;
    font-size: 1.2rem;
    width: 80%;

    @media only screen and (max-width: 736px) and (orientation: landscape) {
        top: 10%;

        img {
            width: 20%;
        }
    }
`

export default props => {
  return (
      <Header>
        <Navigation />
        {/* <Logo>
                <img src={logo} alt="" width="150" />
                <h1>
                Pâtisserie spécialisée dans les petits desserts basée à Montréal.
                </h1>
            </Logo> */}
        {props.children}
      </Header>
  )
}
