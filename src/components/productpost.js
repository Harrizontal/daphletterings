import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import LatestBlogs from "../components/latestBlog"
import Countdown from "../components/countdown"
import StarRatingComponent from 'react-star-rating-component';
import { graphql } from "gatsby";

export default class ProductPost extends React.Component {
    render() {
      const { data } = this.props;
      return (
        <React.Fragment>
          <div className="row product-main">
            {data.data.allContentfulProduct.edges.map(items => (
              <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={items.node.id}>
                  {items.node.image === null ? <div className="no-image">No Image</div> : <Img sizes={items.node.image.fixed} />}
                    <h2>
                      <Link to={"/"+items.node.productSubCategory.productCategory.slug+"/"+items.node.productSubCategory.slug+"/"+items.node.slug}>{items.node.name}</Link>
                    </h2>
              </div>
            ))}
          </div>
        </React.Fragment>
      );
    }
  }
