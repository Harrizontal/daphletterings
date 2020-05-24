/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Header2 from "./header2"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allContentfulProductCategory {
          edges {
            node {
              id
              name
              slug
              productSubCategories {
                id
                name
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header2 siteTitle={data.site.siteMetadata.title} productCategories={data.allContentfulProductCategory}/>
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
