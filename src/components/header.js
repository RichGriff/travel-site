import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { MenuData } from "../data/MenuData"
import { Button } from "./Button"

const Header = ({ toggle, dark }) => {
  console.log(dark)

  return (
    <Nav dark={dark}>
      <NavLink to="/">Explore</NavLink>
      <MobileIcon onClick={toggle}>
        <Bars />
      </MobileIcon>
      <NavMenu>
        {MenuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/trips">
          Book a Trip
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: ${({ dark }) => (dark ? "#0d0d0d" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position:relative;
`
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  pointer: cursor;
`

const MobileIcon = styled.div`
  @media screen and (min-width: 1080px) {
    display: none;
  }
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    pointer: cursor;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
