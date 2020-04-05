import React from 'react'
import Grid from '@material-ui/core/Grid'

import { graphql, useStaticQuery } from 'gatsby'



const Experience = () => {
    const data = useStaticQuery(graphql`
    query{
        markdownRemark(frontmatter: {title: {eq: "Experience"} }){
          html
        }
      }
    `);

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

            </Grid>

        </Grid>
    )


}

export default Experience
