import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from '../utils/background'


const Wrapper = styled.div`
 position: relative;
 width: 100vw;
 
`


const Experience = () => {

  const data = useStaticQuery(graphql`
    query{
      file(relativePath:{eq: "money.jpg"}){
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160){
                ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }

`)

  return (

    <Wrapper>
      <BackgroundImage tag="div" title="experience" fluid={data.file.childImageSharp.fluid} height="50vh" overlayColor="rgba(black, 0.5)">


        <p>Trading in my Experience</p>

        <Grid container spacing={2}>
          <Grid item lg={6} md={6} xs={12} >
            <p>In my trading journey, one guy told me,
            “Don’t follow anybody, learn everything for yourself”.
            I must admit I got a little angry (BTW, anger is not an emotion for a trader) because I thought, I don’t know what I don’t know.
            So I continued following “gurus after gurus” and loosing not only my equity, but money paid for their expensive subscriptions.
            I learned basically nothing, because they were still making the same mistakes as I was and there was usually no value.
            Then I decide to just do what the guy said and learn on my own. Then life and trading got better.
            But don’t be fooled it will take a long time, well at least for most of us I evaluate myself every year and I rate my value by how many people I have helped each year,
            who’s life is better off because they met me, whether it be in person, YouTube or here on my blog.
                </p>
          </Grid>
          <Grid item lg={6} md={6} xs={12} >
            <p>
              You are trying to go into a profession that can make you thousands of dollars in seconds, therefore you dare not think this is something that is going to be easy, or else everyone would be trading.
              But be encouraged that once you learn to trade, it will be quite easy.Now you might say, why should I follow you then.
              Well I am not selling you anything and neither am I telling you to follow me. This is a selfish act really, and I will tell you why.
            </p>
          </Grid>





        </Grid>

      </BackgroundImage>

    </Wrapper>



  )


}

export default Experience
