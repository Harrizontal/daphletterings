import React from "react"
import { graphql, Link } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
// Generate page for categories
import ProductPost from "../components/productpost"

const SubCategory = data => (
    <Layout>
        <SEO title={"sub category"} keywords={[`gatsby`, `ecommerce`, `react`, `contentFul`, `Snipcart`]} />
        sub category
        <ProductPost data={data}/>
    </Layout>
)

export default SubCategory

export const query = graphql`
query ProductListQuery($productCatSlug: String!, $productSubCatSlug: String!) {
    allContentfulProduct(filter: {productSubCategory: {slug: {eq: $productSubCatSlug}}, productCategory: {slug: {eq:$productCatSlug}}}) {
      edges {
        node {
          id
          slug
          name
          productSubCategory {
            id
            slug
            productCategory {
              slug
            }
          }
          image {
            fixed(width: 500, height: 500) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
  }  
`