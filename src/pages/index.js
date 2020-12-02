import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Collaboration from "../components/collaboration"
import Banner from "../components/banner"

const Highlight = styled.span`
  color: #00293f;
  font-weight: bold;
`

const GreyBackground = styled.div`
  background-color: #f5f5f5;
`

const WhiteBackground = styled.div`
  background-color: #ffffff;
`

const ContentFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > * {
    flex: 1;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    & > p {
      margin-right: 0px;
      margin-left: 0px;
    }
  }
`

const ContentFlexLeft = styled(ContentFlex)`
  & > p {
    margin-right: 3rem;
  }

  @media (max-width: 992px) {
    & > p {
      margin-right: 0px;
      margin-bottom: 1rem;
    }
`

const ContentFlexRight = styled(ContentFlex)`
  & > p {
    margin-left: 3rem;
  }

  @media (max-width: 992px) {
    & > p {
      margin-left: 0px;
      margin-top: 1rem;
    }
`

const ContentImage = styled.div`
  @media (max-width: 992px) {
    display: contents;
  }
`

const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query {
      banner: file(
        relativePath: { eq: "banners/CS-Studio-Keyvisual_banner_1_darker_v03.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3300, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pvmg: file(relativePath: { eq: "Layer-Architecture-IOC-hosting-v20-5.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ui: file(relativePath: { eq: "01-main_System-Overview_v02.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      databrowser: file(relativePath: { eq: "dataBrowser.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 655) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="" />
      <Banner
        imageFluid={images.banner.childImageSharp.fluid}
        text="BRING YOUR CONTROL SYSTEM TO THE NEXT LEVEL"
      />
      <div>
        <Container style={{ marginTop: `2rem`, marginBottom: `2rem` }}>
          <h1>Control System Studio</h1>
          <p style={{ marginBottom: `0` }}>
            <Highlight>Control System Studio</Highlight> or <Highlight>CS-Studio</Highlight> is an Eclipse-based
            collection of tools to monitor and operate large scale control
            systems, such as the ones in the accelerator community. It's a
            product of the collaboration between different laboratories and
            universities.
          </p>
        </Container>
        <GreyBackground style={{ padding: `2rem 0` }}>
          <Container>
            <h2>
              <span
                style={{
                  lineHeight: `1.6`,
                  boxDecorationBreak: `clone`,
                  WebkitBoxDecorationBreak: `clone`,
                }}
              >
                EASILY INTEGRATES WITH YOUR CONTROL SYSTEM
              </span>
            </h2>
            <ContentFlexLeft>
              <p>
                With PVManager at the center visualize any datasource service or
                event driven. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <ContentImage>
                <Img
                  fluid={images.pvmg.childImageSharp.fluid}
                  style={{ maxWidth: 437, width: `100%` }}
                />
              </ContentImage>
            </ContentFlexLeft>
          </Container>
        </GreyBackground>
        <WhiteBackground style={{ padding: `2rem 0` }}>
          <Container>
            <h2>
              <span
                style={{
                  lineHeight: `1.6`,
                  boxDecorationBreak: `clone`,
                  WebkitBoxDecorationBreak: `clone`,
                }}
              >
                PRODUCTION QUALITY USER INTERFACES
              </span>
            </h2>
            <ContentFlexRight>
              <ContentImage>
                <Img
                  fluid={images.ui.childImageSharp.fluid}
                  style={{ maxWidth: 437, width: `100%` }}
                />
              </ContentImage>
              <p>
                With a focus on control room screens and viewing on the fly
                correlations. Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
            </ContentFlexRight>
          </Container>
        </WhiteBackground>
        <GreyBackground style={{ padding: `2rem 0`, marginBottom: `2rem` }}>
          <Container>
            <h2>
              <span
                style={{
                  lineHeight: `1.6`,
                  boxDecorationBreak: `clone`,
                  WebkitBoxDecorationBreak: `clone`,
                }}
              >
                THE POWERFUL DATABROWSER
              </span>
            </h2>
            <ContentFlexLeft>
              <p>
                View archived data and live data together. Neque porro quisquam
                est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt
                ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
              </p>
              <ContentImage>
                <Img
                  fluid={images.databrowser.childImageSharp.fluid}
                  style={{ maxWidth: 655, width: `100%` }}
                />
              </ContentImage>
            </ContentFlexLeft>
          </Container>
        </GreyBackground>
        <Container>
          <h2>Our Collaboration</h2>
          <div style={{ marginBottom: `2rem` }}>
            <Collaboration />
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
