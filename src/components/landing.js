import React from 'react'
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'



const Landing = () => {



    return (
        <Container>

            <Grid container spacing={2}>

                <Grid item lg={6} md={6} xs={12}>
                    <p>Welcome to my site! I am a Day Trader,
                    I trade stocks, and I have devoted a long time to finding the right strategy to make money.
                    I have also watched thousands of videos,
                    attended webinars and read numerous books just to get the “edge”.</p>
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

        </Container>
    )

}

export default Landing

