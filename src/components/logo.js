import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const alt = "Control System Studio Logo"

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "CSS_logo_2019_darkblue_no border_v08.svg" }) {
        childImageSharp {
          fluid(maxWidth: 115) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        extension
        publicURL
      }
    }
  `)
  
  if (!data.logo.childImageSharp && data.logo.extension === 'svg') {
    return <img src={data.logo.publicURL} alt={alt} style={{ minHeight: 55, marginBottom: 0 }}/>
  }
  return <Img fluid={data.logo.childImageSharp.fluid} style={{ maxWidth: 100 }} alt={alt} />
}

export default Image
