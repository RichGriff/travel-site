import React, { useState } from "react"
import Footer from "./Footer"
import Header from "./header"
import Sidebar from "./Sidebar"
import { GlobalStyles } from "./styles/GlobalStyles"

const Layout = ({ children, dark }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyles />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} dark={dark} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
