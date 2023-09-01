import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Collaboration = ({ style }) => {
  const images = useStaticQuery(graphql`{
  ess: file(relativePath: {eq: "institutes/ESS_logo.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  brok: file(relativePath: {eq: "institutes/Brok_Logo_v01.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  desy: file(relativePath: {eq: "institutes/desy_Logo_v01.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  frib: file(relativePath: {eq: "institutes/FRIB_logo_v01.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  iter: file(relativePath: {eq: "institutes/iter_v01.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  sns: file(
    relativePath: {eq: "institutes/Spallation_Neutron_Source_logo_v01.png"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  als: file(relativePath: {eq: "institutes/als.png"}) {
    childImageSharp {
      gatsbyImageData(width: 120, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  dls: file(relativePath: {eq: "institutes/diamond.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  cea: file(relativePath: {eq: "institutes/cea.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
}`)

  return (
    <Flex style={style}>
      <a
        href="https://europeanspallationsource.se/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to ESS Website"
      >
        <GatsbyImage
          image={images.ess.childImageSharp.gatsbyImageData}
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
        <GatsbyImage
          image={images.brok.childImageSharp.gatsbyImageData}
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
        <GatsbyImage
          image={images.desy.childImageSharp.gatsbyImageData}
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
        <GatsbyImage
          image={images.frib.childImageSharp.gatsbyImageData}
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
        <GatsbyImage
          image={images.iter.childImageSharp.gatsbyImageData}
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
        <GatsbyImage
          image={images.sns.childImageSharp.gatsbyImageData}
          style={{ minWidth: 99 }}
          alt="SNS Logo"
        />
      </a>
      <a
        href="https://als.lbl.gov/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to SNS Website"
      >
        <GatsbyImage
          image={images.als.childImageSharp.gatsbyImageData}
          style={{ minWidth: 99 }}
          alt="ALS Logo"
        />
      </a>
      <a
        href="https://www.diamondlightsource.ac.uk"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to SNS Website"
      >
        <GatsbyImage
          image={images.dls.childImageSharp.gatsbyImageData}
          style={{ minWidth: 99 }}
          alt="DLS Logo"
        />
      </a>
      <a
        href="https://www.cea.fr/english/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to SNS Website"
      >
        <GatsbyImage
          image={images.cea.childImageSharp.gatsbyImageData}
          style={{ minWidth: 99 }}
          alt="CEA Logo"
        />
      </a>
    </Flex>
  );
}

export default Collaboration
