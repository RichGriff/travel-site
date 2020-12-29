import React from "react"
import Footer from "./Footer"
import Header from "./header"
import { GlobalStyles } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
