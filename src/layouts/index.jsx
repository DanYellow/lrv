import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { COLOR_PINK } from 'config/variables'
import HeaderWrapper from 'components/header-wrapper'

import 'layouts/styles/reset.css'
import 'layouts/styles/fonts.css'
import 'layouts/styles/base.css'
import 'layouts/styles/icons.css'

const Footer = styled.footer`
  display: flex;
  margin-top: 35px;
  margin-bottom: 10px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: normal;
  }
`

const Wrapper = styled.section`
  max-width: 950px;
  margin: 0 auto;

  @media only screen and (max-width: 736px) {
    margin: 0 5px;
  }
`

const Socials = styled.ul`
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
  margin-left: 10px;

  @media only screen and (min-width: 1025px) {
    li {
      margin-right: 5px;
    }
  }
  
  @media only screen and (max-width: 736px) {
    margin-top: 15px;
    font-size: 3rem;
  }

  @media only screen and (min-width: 737px) and (max-width: 1024px) {
    font-size: 3rem;
  }

  a {
    color: black;

    &:hover,
    &:active {
      color: ${COLOR_PINK};
    }
  }
`

const PageTitle = styled.section`
    position: relative;
    max-width: 950px;
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
`

const socials = [
  {
    icon: 'facebook',
    url: 'https://www.facebook.com/laroseveloutee/',
  },
  {
    icon: 'instagram',
    url: 'https://www.instagram.com/la_rose_veloutee/',
  },
]

const Layout = (props) => {
  console.log(props, props.layoutContext)
  return (
    // const Layout = ({ children, data, pathContext }) => (
      <div>
        <Helmet
          title={props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <HeaderWrapper />
        
        <Wrapper>
          {props.children()}
          <Footer>
            © La Rose Veloutée {new Date().getFullYear()}
            <Socials>
              {socials.map(social => {
                return (
                  <li key={social.url}>
                    <a href={social.url}>
                      <i className={`icon icon-${social.icon}`}></i>
                    </a>
                  </li>
                )
              })}
            </Socials>
          </Footer>
        </Wrapper>
      </div>
    )
} 



Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
