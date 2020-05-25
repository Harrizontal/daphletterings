var path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const StoreTemplate = path.resolve("src/templates/details.js")
    const BlogTemplate = path.resolve("src/templates/blogDetails.js")
    const ProductCategoryTemplate = path.resolve("src/templates/category.js")
    const ProductSubCategoryTemplate = path.resolve("src/templates/subCategory.js")
    resolve(
      graphql(`
        {
          allContentfulProductCategory {
            edges {
              node {
                id
                slug
              }
            }
          }
          allContentfulProductSubCategory {
            edges {
              node {
                id
                name
                slug
                productCategory {
                  slug
                  name
                }
              }
            }
          }
          allContentfulProduct {
            edges {
              node {
                id
                slug
                productSubCategory {
                  name
                  slug
                }
                productCategory {
                  id
                  name
                  slug
                }
              }
            }
          }
          allContentfulBlogs {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulProduct.edges.forEach(edge => {
          let productSlug = edge.node.productCategory.slug;
          let subProductSlug = edge.node.productSubCategory.slug;
          let productNameSlug = edge.node.slug;
          createPage({
            path: productSlug+"/"+subProductSlug+"/"+productNameSlug,
            component: StoreTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        });
        result.data.allContentfulBlogs.edges.forEach(data => {
          createPage({
            path: "blog/"+data.node.slug,
            component: BlogTemplate,
            context: {
              slug: data.node.slug
            }
          });
        });

        result.data.allContentfulProductCategory.edges.forEach(edge => {
          let productSlug = edge.node.slug;
          createPage({
            path:productSlug,
            component: ProductCategoryTemplate,
            context: {
              productCatSlug: edge.node.slug
            }
          })
        });

        result.data.allContentfulProductSubCategory.edges.forEach(edge => {
          let productSlug = edge.node.productCategory.slug;
          let subProductSlug = edge.node.slug;
          createPage({
            path:productSlug+"/"+subProductSlug,
            component: ProductSubCategoryTemplate,
            context: {
              productCatSlug: productSlug,
              productSubCatSlug: subProductSlug
            }
          })
        });

        return
      })
    )
  })
}
