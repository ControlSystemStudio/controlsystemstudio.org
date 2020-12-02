import React from "react"
import styled from "styled-components"

import Container from "./container"

const StyledFooter = styled.div`
  background-color: #00293f;
  color: #b7b7b7;

  a {
    text-decoration: none;
    color: #b7b7b7;
  }

  a:hover {
    color: #ffffff;
  }
`

const Flex = styled.footer`
  display: flex;
  justify-content: space-between;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <div>
            © {new Date().getFullYear()}, Control System Studio
          </div>
        </Flex>
      </Container>
    </StyledFooter>
  )
}

export default Footer
