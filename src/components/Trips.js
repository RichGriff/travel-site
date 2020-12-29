import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "../components/Button"
import { ImLocation } from "react-icons/Im"

function Trips({ heading }) {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            name
            alt
            button
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getTrips(data) {
    const tripsArray = []
    data.allTripsJson.edges.forEach((item, index) => {
      tripsArray.push(
        <TripCard key={index}>
          <TripImg
            src={item.node.image.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.image.childImageSharp.fluid}
          />
          <TripInfo>
            <TextWrap>
              <ImLocation />
              <TripTitle>{item.node.name}</TripTitle>
            </TextWrap>
            <Button
              to="/trips"
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Button>
          </TripInfo>
        </TripCard>
      )
    })
    return tripsArray
  }

  return (
    <div>
      <TripsContainer>
        <TripsHeading>{heading}</TripsHeading>
        <TripWrapper>{getTrips(data)}</TripWrapper>
      </TripsContainer>
    </div>
  )
}

export default Trips

const TripsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`

const TripsHeading = styled.h1`
  font-size: clamp(1.2rem, 5vw, 2.1rem);
  text-align: center;
  margin-bottom: 4rem;
  color: #000;
`

const TripWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-content: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const TripCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`

const TripImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const TripInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const TripTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
