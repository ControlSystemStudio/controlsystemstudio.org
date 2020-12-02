import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faGooglePlus } from "@fortawesome/free-brands-svg-icons"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css"

import Logo from "./logo"
import Container from "./container"

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const MenuToggle = styled.button`
  text-decoration: none;
  color: #000000;
  background-color: #ffffff;
  cursor: pointer;
  padding: 1rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  transition: color 250ms ease-in;
  border: none;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const Menu = styled.nav`
  display: flex;
  justify-content: space-around;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  padding: 0.5rem 0;

  & > a {
    text-decoration: none;
    color: #000000;
    padding: 0.5rem;
    margin: auto 0.5rem;
    transition: color 250ms ease-in;
  }

  & > a:hover {
    color: #00293f;
  }
  
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > a {
      padding: 1rem;
    }
    a {
      display: ${props => props.visible ? '' : 'none'};
    }
  }
`

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  a {
    color: #004160;
    padding: 0.5rem;
  }
  @media only screen and (min-width: 768px) {
    a {
      font-size: 14px;
      padding: 0.5rem 0;
      margin: auto 0 auto 5px;
    }
  }
`

const Header = ({ siteTitle }) => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <header
      style={{
        background: `#ffffff`,
      }}
    >
      <Container>
        <Flex>
          <div
            style={{
              minWidth: 100,
              margin: `0.5rem 0`,
            }}
          >
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
              aria-label="Home"
            >
              <Logo />
            </Link>
          </div>
          <Menu visible={menuVisible}>
            <MenuToggle onClick={() => setMenuVisible(!menuVisible)}>
            {menuVisible ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />} Menu
            </MenuToggle>
            <Link
              to="/about"
              activeStyle={{
                color: "#004160",
                borderBottom: `2px solid #004160`,
              }}
            >
              About
            </Link>
            <Link
              to="/features"
              activeStyle={{
                color: "#004160",
                borderBottom: `2px solid #004160`,
              }}
            >
              Features
            </Link>
            <Link
              to="/docs"
              activeStyle={{
                color: "#004160",
                borderBottom: `2px solid #004160`,
              }}
            >
              Docs
            </Link>
            <Link
              to="/contribute"
              activeStyle={{
                color: "#004160",
                borderBottom: `2px solid #004160`,
              }}
            >
              Contribute
            </Link>
            <Link
              to="/download"
              activeStyle={{
                color: "#004160",
                borderBottom: `2px solid #004160`,
              }}
            >
              Download
            </Link>
            <SocialMediaLinks>
              <a
                href="https://github.com/ControlSystemStudio/cs-studio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to Github repository"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://plus.google.com/u/0/b/101349549663920375487/101349549663920375487/posts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to Google Plus community"
              >
                <FontAwesomeIcon icon={faGooglePlus} size="2x" />
              </a>
            </SocialMediaLinks>
          </Menu>
        </Flex>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
