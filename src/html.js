import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
                {
                  '@context': 'http://schema.org',
                  '@type': 'Bakery',
                  url: 'http://www.laroseveloutee.com',
                  name: 'La Rose Veloutée - Délicieusement vôtre',
                  servesCuisine: 'Cupcakes, Verrines et Pop-cakes',
                  telephone: '+1-514-224-0059',
                  priceRange: '$$',
                  image: '#',
                }
              `,
            }}
          />
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
