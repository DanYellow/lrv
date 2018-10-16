import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

//
import socials from 'config/socials'
import Socials from 'components/socials'
// import HeaderWrapper from 'components/header-wrapper'

import 'styles/reset.css'
import 'styles/fonts.css'
import 'styles/base.css'
import 'styles/icons.css'

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

const PageTitle = styled.section`
  position: relative;
  max-width: 950px;
  margin: 0 auto;
  border-top: 5px solid #d82383;
  margin-bottom: 30px !important;

  @media only screen and (max-width: 768px) {
    margin: 0 15px;
  }

  h1 {
    position: absolute;
    top: -60px;
    padding: 7px 40px 7px 7px;
    background-color: #d82383;
    color: white;
    font-weight: bold;
    font-size: 2rem;
    z-index: 9;
  }
`

export default ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} />
          <Wrapper>
            {children}
            <Footer>
              © La Rose Veloutée {new Date().getFullYear()}
              <Socials data={socials} />
            </Footer>
          </Wrapper>
        </>
      )}
    />
  )
}
