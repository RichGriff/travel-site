import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { FaRegLightbulb } from "react-icons/fa"
import { IoMdCheckmarkCircleOutline } from "react-icons/Io"
import { useStaticQuery, graphql } from "gatsby"

export const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          name: { in: ["Jane", "John"] }
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
    <TestimonialsContainer>
      <TopLine>Testimonials</TopLine>
      <Description>What people are saying</Description>
      <ContentWrapper>
        <Col1>
          <Testimonial>
            <IoMdCheckmarkCircleOutline
              css={`
                color: #3fffa8;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>John Doe</h3>
            <p>
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque nostrum consectetur error quod dolorem, suscipit culpa
              placeat nihil esse, quae minima ipsa ea vel ipsum! Eligendi
              officiis eaque rerum harum".
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb
              css={`
                color: #f9b19b;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Jane Doe</h3>
            <p>
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque nostrum consectetur error quod dolorem, suscipit culpa
              placeat nihil esse, quae minima ipsa ea vel ipsum! Eligendi
              officiis eaque rerum harum."
            </p>
          </Testimonial>
        </Col1>
        <Col2>
          {data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
        </Col2>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const Col1 = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const Col2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
    font-size: 0.9rem;
  }
`

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`
