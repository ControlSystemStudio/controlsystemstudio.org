import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Image = () => {
  const alt = "Control System Studio Logo"

  const data = useStaticQuery(graphql`{
  logo: file(relativePath: {eq: "CSS_logo_2019_darkblue_no border_v08.svg"}) {
    childImageSharp {
      gatsbyImageData(width: 115, layout: CONSTRAINED)
    }
    extension
    publicURL
  }
}`)
  
  if (!data.logo.childImageSharp && data.logo.extension === 'svg') {
    return <img src={data.logo.publicURL} alt={alt} style={{ minHeight: 55, marginBottom: 0 }}/>
  }
  return <GatsbyImage image={data.logo.childImageSharp.gatsbyImageData} style={{ maxWidth: 100 }} alt={alt} />;
}

export default Image
