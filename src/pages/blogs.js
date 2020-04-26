import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
              description
            }
          }
        }
      }
    }
    
    
    `)

    console.log(data);

    return (
        <Layout>
          <Container>

            <h1>Blog</h1>
            <ul>
                {data.allMarkdownRemark.edges.map((edge) => {

                  const post = ({
                    title: edge.node.frontmatter.title,
                    date : edge.node.frontmatter.date,
                    description: edge.node.frontmatter.description
                  })
                    return (
                        <Card>
                          <CardMedia>

                          </CardMedia>
                          <CardContent>
                            <h1>{post.title}</h1>
                            <p>{post.date}</p>
                          </CardContent>
                        </Card>
                    )
                })}
            </ul>
          </Container>
        </Layout>
    )

}

export default BlogPage