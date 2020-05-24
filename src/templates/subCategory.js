import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
// Generate page for categories

const SubCategory = data => (
    <Layout>
        <SEO title={"sub category"} keywords={[`gatsby`, `ecommerce`, `react`, `contentFul`, `Snipcart`]} />
        sub category
        <br></br>
        {data.data.allContentfulProduct.edges.map(edge =>(
           <span>{edge.node.name}</span> 
        ))}
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
        }
      }
    }
  }  
`