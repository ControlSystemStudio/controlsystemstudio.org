import React from 'react'
import BackgroundImage from "gatsby-background-image"

import Container from './container'

const Banner = ({ imageFluid, text }) => (
  <div style={{ width: `100%` }}>
    <BackgroundImage
      fluid={imageFluid}
      style={{ minHeight: 200, display: `flex`, justifyContent: `center` }}
    >
      <Container>
        <h1>
          <span
            style={{
              color: `#ffffff`,
              textShadow: `0 0 5px #001821`,
              lineHeight: `1.6`,
              boxDecorationBreak: `clone`,
              WebkitBoxDecorationBreak: `clone`,
            }}
          >
            {text}
          </span>
        </h1>
      </Container>
    </BackgroundImage>
  </div>
)

export default Banner