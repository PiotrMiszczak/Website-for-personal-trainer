/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
           
            image
          }
        }
      }
    `
  )

  
  const defaultTitle = site.siteMetadata?.title
  const defaultDescription = site.siteMetadata?.description

  const seoValues = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: site.siteMetadata?.image,
    
  }

  return (
    <Helmet
     
      title={seoValues.title}
      
      meta={[
        {
          name: `description`,
          content: seoValues.description,
        },
        
        {
          property: `og:title`,
          content: seoValues.title,
        },
        {
          property: `og:description`,
          content: seoValues.description,
        },
        {
          property: `og:image`,
          content: seoValues.image,
        },
    
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: seoValues.title,
        },
        {
          name: `twitter:description`,
          content:seoValues.description,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default Seo
