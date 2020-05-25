import React from "react"
import { graphql, Link } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "../css/style2.css"
// Generate page for categories

const Category = (data) => (
    <Layout>
        <SEO title={"asd"} keywords={[`gatsby`, `ecommerce`, `react`, `contentFul`, `Snipcart`]} />
        Category
        <br></br>
        <div className="sub-category-list-wrapper">
        {data.data.allContentfulProductCategory.edges[0].node.productSubCategories.map(edge =>(
          <div className="sub-category-wrapper">
            <Img sizes={edge.image.fixed}/>
            <Link to={data.data.allContentfulProductCategory.edges[0].node.slug+"/"+edge.slug}>{edge.name}</Link>
          </div>
        ))}
        </div>
    </Layout>
)

export default Category

export const query = graphql`
query SubCategoryList($productCatSlug: String!) {
    allContentfulProductCategory(filter: {slug: {eq: $productCatSlug}}) {
        edges {
          node {
            id
            name
            slug
            productSubCategories {
              id
              name
              slug
              image {
                fixed(width: 500,height:500) {
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
  }  
`