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

        <div>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>




    )


}

export default Experience
