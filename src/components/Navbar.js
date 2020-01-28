import React from 'react'
import { Link } from 'gatsby'
import {List} from './Lists'
import styled from "@emotion/styled"

const Navbar = () => (
  <NavbarWrapper>
    <nav
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="col-2">
        <Link to="/">
          Logo
        </Link>
      </div>
      <div className="col-2">
        <List inline>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </List>
      </div>
    </nav>
  </NavbarWrapper>
)

const NavbarWrapper = styled.div`
  margin: 3rem 0;
`
export default Navbar
