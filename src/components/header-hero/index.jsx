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
    }
`

export default class HeaderHero extends React.Component {
  constructor(props) {
    super(props)

    this.hero = React.createRef()
    this.amountscrolled = this.amountscrolled.bind(this)

    window.addEventListener('scroll', this.amountscrolled, false)
    window.addEventListener('touchmove', this.amountscrolled, false)
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
