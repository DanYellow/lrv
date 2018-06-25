import React, { PureComponent } from 'react'
import styled from 'styled-components'

import img from './image3.jpg'

const Hero = styled.div`
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: 45vh;
        object-position: 50% 50%;
        object-fit: cover;

        @media only screen and (max-width: 736px) {
            height: 65vh;
        }
    }

    &:before {
        content: '';
        background-color: rgba(0, 0, 0, .5);
        top: 0; left: 0; 
        right: 0; bottom: 0;
        position: absolute;
        z-index: 1;
    }
`

export default class HeaderHero extends React.Component {
  constructor(props) {
    super(props)

    this.hero = React.createRef()
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

    var newScale = (scrollTop / trackLength + 0) * 0.25 + 1
    this.hero.current.style.transform = `scale(${newScale})`
  }

  render() {
    return (
      <Hero innerRef={this.hero} >
        <img src={img} alt="" />
      </Hero>
    )
  }
}
