import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import PageTitle from 'components/page-title'
import socials from 'config/socials'
import Socials from 'components/socials'
import Header from 'components/header'

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

export default ({ pageTitle = 'Bienvenue', children }) => {
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
          <Helmet
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            link={[
              {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: './favicon.ico',
              },
            ]}
          />
          <Header />
          <Wrapper>
            <PageTitle title={pageTitle} />
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
