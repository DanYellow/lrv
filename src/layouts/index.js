import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import HeaderWrapper from 'components/header-wrapper'
import HeaderHero from 'components/header-hero'
import './reset.css'
import './fonts.css'
import './base.css'

const Footer = styled.footer`
  margin-top: 35px;
  margin-bottom: 10px;
`

const Wrapper = styled.section`
  max-width: 950px;
  margin: 0 auto;

  @media only screen and (max-width: 736px) {
    margin: 0 5px;
  }
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <HeaderWrapper pageTitle={'Services'}>
      <HeaderHero />
    </HeaderWrapper>
    <Wrapper>
      {children()}

      <Footer>
        © La Rose Veloutée {  new Date().getFullYear() } 
      </Footer>  
    </Wrapper>
  </div>
)

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
