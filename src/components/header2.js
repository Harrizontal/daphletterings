import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"
import "../css/style.css"
import SEO from "./seo"
import logo from "../images/harrizontal.png"

const Header2 = ({ siteTitle, productCategories}) => (
    <header className="site-header">
      <SEO>
      </SEO>
      <div className="container">
        <div className="row" style={{justifyContent:"center"}}>
          <div className="header-cart">
            <Link className="Header__summary snipcart-summary snipcart-checkout" to="#">
              <i className="fas fa-cart-plus"></i>
            </Link>
            <span class="snipcart-items-count"></span>
            <span class="snipcart-total-price"></span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 align-self-center">
            <nav>
              <ul className="navbar-nav">
                
                {productCategories.edges.map(edge => (
                  <li className="nav-item">
                    <Link className="nav-link" to={"/"+edge.node.slug}>{edge.node.name}</Link>
                  </li>
                ))}
                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">Blogs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
  
    </header >
  )

  export default Header2