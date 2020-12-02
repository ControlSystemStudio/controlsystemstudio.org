import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Collaboration = ({ style }) => {
  const images = useStaticQuery(graphql`
    query {
      ess: file(relativePath: { eq: "institutes/ESS_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 99, maxHeight: 99, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      brok: file(relativePath: { eq: "institutes/Brok_Logo_v01.png" }) {
        childImageSharp {
          fluid(maxWidth: 99, maxHeight: 99, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desy: file(relativePath: { eq: "institutes/desy_Logo_v01.png" }) {
        childImageSharp {
          fluid(maxWidth: 99, maxHeight: 99, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      frib: file(relativePath: { eq: "institutes/FRIB_logo_v01.png" }) {
        childImageSharp {
          fluid(maxWidth: 99, maxHeight: 99, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      iter: file(relativePath: { eq: "institutes/iter_v01.png" }) {
        childImageSharp {
          fluid(maxWidth: 99, maxHeight: 99, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sns: file(
        relativePath: { eq: "institutes/Spallation_Neutron_Source_logo_v01.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 99, maxHeight: 99, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Flex style={style}>
      <a
        href="https://europeanspallationsource.se/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to ESS Website"
      >
        <Img
          fluid={images.ess.childImageSharp.fluid}
          style={{ minWidth: 99 }}
          alt="ESS Logo"
        />
      </a>
      <a
        href="http://www.bnl.gov/world/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to BNL Website"
      >
        <Img
          fluid={images.brok.childImageSharp.fluid}
          style={{ minWidth: 99 }}
          alt="BNL Logo"
        />
      </a>
      <a
        href="http://www.desy.de/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to DESY Website"
      >
        <Img
          fluid={images.desy.childImageSharp.fluid}
          style={{ minWidth: 99 }}
          alt="DESY Logo"
        />
      </a>
      <a
        href="http://www.frib.msu.edu/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to FRIB Website"
      >
        <Img
          fluid={images.frib.childImageSharp.fluid}
          style={{ minWidth: 99 }}
          alt="FRIB Logo"
        />
      </a>
      <a
        href="http://www.iter.org/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to ITER Website"
      >
        <Img
          fluid={images.iter.childImageSharp.fluid}
          style={{ minWidth: 99 }}
          alt="ITER Logo"
        />
      </a>
      <a
        href="https://neutrons.ornl.gov/sns"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to SNS Website"
      >
        <Img
          fluid={images.sns.childImageSharp.fluid}
          style={{ minWidth: 99 }}
          alt="SNS Logo"
        />
      </a>
    </Flex>
  )
}

export default Collaboration
