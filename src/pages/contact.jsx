import React from 'react'
import Styled from 'styled-components'

import MainLayout from 'layouts/main'
import { COLOR_PINK } from 'config/colors'

const Footer = Styled.footer`
  margin-top: 25px;

  p {
    font-style: italic;
  }
`

const Paragraph = Styled.p`
  margin-bottom: 10px;
`

const ParagraphBold = Styled(Paragraph)`
  font-weight: bold;
`

const Contact = Styled.section`
  max-width: 600px;
`

const Email = Styled.p`
  display: block;
  font-style: italic;
  font-weight: bold;
  font-size: 1.3rem;
  color: ${COLOR_PINK};
`

const ContactPage = () => (
  <MainLayout pageTitle="Contact" style={{ maxWidth: 1000 }}>
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
  </MainLayout>
)

export default ContactPage
