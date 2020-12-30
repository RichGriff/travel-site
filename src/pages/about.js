import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import { Button } from "../components/Button"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allFile(
        filter: {
          name: { in: ["aboutus"] }
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout dark="true">
      <Container>
        <Content>
          <ContentTitle>
            <SEO title="About" />
            <h1>About Us!</h1>
          </ContentTitle>
          <ContentWrapper>
            <ContentDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                ratione? Minus, culpa impedit quis et voluptas quo doloribus
                error sapiente porro nulla magni laboriosam officiis velit
                laudantium ad, dolores exercitationem?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                ratione? Minus, culpa impedit quis et voluptas quo doloribus
                error sapiente porro nulla magni laboriosam officiis velit
                laudantium ad, dolores exercitationem?
              </p>
              <p
                css={`
                  padding-bottom: 1rem;
                `}
              >
                Why not check out our destinations below and find your next
                adventure!
              </p>
              <Button primary="true" round="true" to="/trips">
                View Destinations
              </Button>
            </ContentDescription>
            {data.allFile.edges.map((image, key) => (
              <Image key={key} fluid={image.node.childImageSharp.fluid} />
            ))}
            <Image />
          </ContentWrapper>
        </Content>
      </Container>
    </Layout>
  )
}

export default About

const Container = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 2rem calc((100vw - 1300px) / 2);
  height: 70vh;

  @media screen and (max-width: 768px) {
    height: 90vh;
  }
`

const Content = styled.div`
  padding: 1rem 2.5rem;
  height: 100%;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ContentTitle = styled.div``

const ContentDescription = styled.div`
  p {
    margin: 1rem 0;
  }
`

const Image = styled(Img)`
  border-radius: 10px;
  height: 100%;
`
