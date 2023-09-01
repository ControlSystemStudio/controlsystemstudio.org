import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
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
  const images = useStaticQuery(graphql`{
  banner: file(
    relativePath: {eq: "banners/CS-Studio-Keyvisual_banner_1_darker_v03.png"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 3300, height: 400, quality: 100, layout: FULL_WIDTH)
    }
  }
  pvmg: file(relativePath: {eq: "Layer-Architecture-IOC-hosting-v20-5.png"}) {
    childImageSharp {
      gatsbyImageData(width: 700, layout: CONSTRAINED)
    }
  }
  ui: file(relativePath: {eq: "01-main_System-Overview_v02.png"}) {
    childImageSharp {
      gatsbyImageData(width: 700, layout: CONSTRAINED)
    }
  }
  databrowser: file(relativePath: {eq: "dataBrowser.png"}) {
    childImageSharp {
      gatsbyImageData(width: 655, layout: CONSTRAINED)
    }
  }
}`)
  return (
    <Layout>
      <SEO title="" />
      <Banner
        imageFluid={images.banner.childImageSharp.gatsbyImageData}
        text="BRING YOUR CONTROL SYSTEM TO THE NEXT LEVEL"
      />
      <div>
        <Container style={{ marginTop: `2rem`, marginBottom: `2rem` }}>
          <h1>Control System Studio</h1>
          <p style={{ marginBottom: `0` }}>
          <Highlight>Control System Studio</Highlight> is a collection of tools and applications to monitor and operate 
          large scale control systems, such as the ones in the accelerator community.
          </p>
          <p></p>
          <p>  <Highlight>Phoebus</Highlight> is a pure java/javafx based implementation which uses java 
          feature like SPI and modules to provide the same extensible and modular achitecture. This is the 
          current implementation of <Highlight>CS-Studio</Highlight>. The original implementation of 
          <Highlight> CS-Studio</Highlight> is based on the eclipse RCP framework which provided
          an extensible and pluggable architecture.
          </p>
          <p> The <Highlight>Phoebus</Highlight> and <Highlight>CS-Studio</Highlight> products are developed and 
          maintained by a collaboration between many laboratories and universities.
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
                With an extensible data connection layer it is possible to use Phoebus & CS-Studio 
                with multiple control systems and data sources. Currently, the community supports
                the EPICS channel access and pvAccess protocols along with MQTT.
                The use of well defined SPI's allows for CS-Studio applications to be used with multiple site specific 
                services.
              </p>
              <ContentImage>
                <GatsbyImage
                  image={images.pvmg.childImageSharp.gatsbyImageData}
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
                QUALITY USER INTERFACES
              </span>
            </h2>
            <ContentFlexRight>
              <ContentImage>
                <GatsbyImage
                  image={images.ui.childImageSharp.gatsbyImageData}
                  style={{ maxWidth: 437, width: `100%` }}
                />
              </ContentImage>
              <p>
                A WYSIWYG editor makes it possible to develop production quality controls and
                monitoring user interfaces easily.
                The Phoebus & CS-Studio frameworks provide support for developing multi-threading applications 
                along with providing features like rate limiting and aggregation ensuring performance and scalablity of 
                user developed screens.
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
              The Databrowser is a trending tool. It aggregates live and
              archived data to plot values over a user-defined time range.
              Databrowser plots may be created from any OPI visual component
              associated with a control system process value (PV). Additional
              features include extensive plot styling capabilities as well as 
              import/export of data in several formats. 
              </p>
              <ContentImage>
                <GatsbyImage
                  image={images.databrowser.childImageSharp.gatsbyImageData}
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
  );
}

export default IndexPage
