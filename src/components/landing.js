import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { graphql, useStaticQuery } from 'gatsby'


const Landing = () => {

    const data = useStaticQuery(graphql`
    query{
        markdownRemark(frontmatter: {title: {eq: "Introduction"} }){
          html
        }
      }

    `);

    return (
        <Grid container spacing={2}>

            <Grid item lg={6} md={6} xs={12}>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
                <Card>
                    <CardMedia
                        component="iframe"
                        height="315"
                        width="560"
                        src="https://www.youtube.com/embed/V4nR5_61TyI">

                    </CardMedia>

                    <CardContent>
                        The Journey Begins Thanks for joining me! Good company in a journey makes the way seem shorter. — Izaak Walton
                        </CardContent>
                </Card>
            </Grid>
        </Grid >
    )

}

export default Landing

