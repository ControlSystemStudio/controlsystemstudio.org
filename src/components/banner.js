import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

import Container from './container'

const Banner = ({ imageFluid, text }) => (
    <div style={{ display: "grid", width: "100%" }}>
      <GatsbyImage
        style={{gridArea: "1/1", minHeight: 200, display: `flex`, justifyContent: `center`}}
        image={imageFluid}
      />
      <Container
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          // This centers the other elements inside the hero component
          display: "grid",
          position: "relative"
        }}
      >
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
  </div>
)

export default Banner