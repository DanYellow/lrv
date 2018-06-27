import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PageTitle from 'components/page-title'

import { COLOR_PINK } from 'config/variables'

const Footer = styled.footer`
  margin-top: 25px;

  p {
    font-style: italic;
  }
`

const Paragraph = styled.p`
  margin-bottom: 10px;
`

const ParagraphBold = Paragraph.extend`
  font-weight: bold;
`

const Contact = styled.section`
  max-width: 600px;
`

const Email = styled.p`
  display: block;
  font-style: italic;
  font-weight: bold;
  font-size: 1.3rem;
  color: ${COLOR_PINK};
`

const ContactPage = () => (
  <div style={{ maxWidth: 1000 }}>
    <PageTitle title="Contact" />
    <Contact>
      <Paragraph>
        La pâtisserie La Rose Veloutée opère dans la région de Montréal et ses
        environs.
      </Paragraph>
      <ParagraphBold>
        Pour passer une commande ou pour obtenir plus d'informations, vous
        pouvez nous contacter au lien ci-dessous.
      </ParagraphBold>
      <Email>info[@]laroseveloutee.com</Email>
      <Footer>
        <p>
          Note : soyez rassurés que nous ferons le nécessaire pour vous répondre
          rapidement, si possible dans les 24 heures qui suivent.
        </p>
      </Footer>
    </Contact>
  </div>
)

export default ContactPage
