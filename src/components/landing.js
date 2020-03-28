import React from 'react'
import Grid from '@material-ui/core/Grid'
import { graphql } from 'graphql'

const Landing = (data) => {

    return (
        <Grid container spacing={2}>

            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
        </Grid>
    )

}

export default Landing

export const PageQuery = graphql`


`;