import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
// import PreviewCompatibleImage from './PreviewCompatibleImage'

const BlogRoll = props => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div>
      {posts && posts.map(({ node: post }) => (
        <div key={post.id}>
          <article>
            <header>
              <div>
                <h3>
                  <Link to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <span> &bull; </span>
                <span>
                  {post.frontmatter.date}
                </span>
              </div>
            </header>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link to={post.fields.slug}>
                Keep Reading →
              </Link>
            </p>
          </article>
        </div>
    ))}
  </div>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
