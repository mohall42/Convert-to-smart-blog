import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
              }
            }
          }
        }
      }
    
    
    `)

    console.log(data);

    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    )

}

export default BlogPage