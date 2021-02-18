import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const BlogLink = styled(Link)`
  text-decoration: none;
  margin-top: 2em;
`

const BlogTitle = styled.h3`
  margin-bottom: 10px;
  color: rebeccapurple;
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Th3Wall's thougths</h1>
      <h4>Total posts: {data.allMarkdownRemark.totalCount}</h4>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
          </div>
        ))
      }
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`