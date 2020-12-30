import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EmailBg from "../assets/images/ErrorBg.jpg"

const NotFoundPage = () => (
  <Layout>
    <ErrorContainer>
      <HeroBg />
      <ErrorContent>
        <SEO title="404: Not found" />
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </ErrorContent>
    </ErrorContainer>
  </Layout>
)

export default NotFoundPage

const ErrorContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  height: 100vh;
  padding: 1rem;
  position: relative;
  margin-top: -80px;
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailBg}) no-repeat center;
  background-size: cover;
  height: 100%;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorContent = styled.div`
  z-index: 10;
  margin-top: -6rem;

  h1 {
    font-size: clamp(3rem, 5vw, 3.2rem);
    margin-bottom: 1rem;
  }
`
