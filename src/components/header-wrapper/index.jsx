import styled from 'styled-components'
import React, { Component } from 'react'

import Navigation from 'components/navigation'

import logo from './logo-white.png'
import bgImage from './image3.jpg'

const Header = styled.header`
    position: relative;
    overflow: hidden;
    background-image: url(${bgImage});
    width: 100%;
    height: 45vh;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;

    @media only screen and (max-width: 736px) {
        height: 95vh;
        background-size: cover!important;
    }

    &:before {
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
        /* top: %; */

        img {
            width: 20%;
        }
    }
`

export default class HeaderWrapper extends Component {
  componentDidMount() {
    this.amountscrolled = this.amountscrolled.bind(this)

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.amountscrolled, false)
      window.addEventListener('touchmove', this.amountscrolled, false)
    }
  }

  getDocHeight() {
    const D = document
    return Math.max(
      D.body.scrollHeight,
      D.documentElement.scrollHeight,
      D.body.offsetHeight,
      D.documentElement.offsetHeight,
      D.body.clientHeight,
      D.documentElement.clientHeight
    )
  }

  amountscrolled() {
    const winheight =
      window.innerHeight ||
      (document.documentElement || document.body).clientHeight
    const docheight = this.getDocHeight()
    const scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop
    const trackLength = docheight - winheight
    const pctScrolled = Math.floor((scrollTop / trackLength) * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)

    const newScale = (scrollTop / trackLength + 0) * 0.25 + 1

    if (this.hero) {
      this.hero.style.backgroundSize = `${newScale * 100}%`
    }
  }

  render() {
    return (
      <Header innerRef={comp => (this.hero = comp)}>
        <Navigation />
        <Logo>
          <img src={logo} alt="" width="150" />
          <h1>
            Pâtisserie spécialisée dans les petits desserts basée à Montréal.
          </h1>
        </Logo>
        {this.props.children}
      </Header>
    )
  }
}
