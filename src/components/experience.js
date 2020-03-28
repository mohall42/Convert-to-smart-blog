import React from 'react'
import Grid from '@material-ui/core/Grid'
import { graphql } from 'graphql'



const Experience = (data) => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>Trading in my experience</Grid>
            <Grid item xs={6}></Grid>

        </Grid>
    )


}

export default Experience

export const pageQuery = graphql`

`;