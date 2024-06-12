import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { faLinux, faApple, faWindows } from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"
import Banner from "../components/banner"
import SiteSpecificVersions from "../components/SiteSpecificVersions"
import { dlInfo } from "../utils/downloadinfo"

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

const StyledDownloadButton = styled.a`
  text-decoration: none;
  background-color: #004160;
  color: #ffffff;
  font-size: 1.3rem;
  cursor: pointer;
  padding: 0.835rem 0.935rem;
  margin: 0 auto;
  transition: background-color 100ms ease-in, border 100ms ease-in;
  border: 2px solid #004160;

  &:hover {
    color: #ffffff;
    background-color: #1a5c7a;
    border: 2px solid #1a5c7a;
  }

  @media only screen and (max-width: 468px) {
    font-size: 1rem;
  }
`

const DownloadSubtext = styled.p`
  text-align: center;
  font-size: 0.95rem;
  padding: 0.835rem 0.935rem;
`

const DownloadText = styled.p`
  text-align: center;
  font-size: 1.1rem;
  padding: 0.835rem 0.935rem;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
`

const DownloadButtonPhoebus = () => (
  <div>
    <StyledDownloadButton href={dlInfo.downloadGitRelease} target={"_blank"}>
      <FontAwesomeIcon icon={faDownload} /> Download Phoebus Control System Studio
    </StyledDownloadButton>
    <DownloadSubtext>
      Releases available for <FontAwesomeIcon icon={faLinux} /> Linux, <FontAwesomeIcon icon={faApple} /> Mac and <FontAwesomeIcon icon={faWindows} /> Windows.
    </DownloadSubtext>
  </div>
)

const Download = () => {
  const images = useStaticQuery(graphql`{
  banner: file(
    relativePath: {eq: "banners/CS-Studio-Keyvisual_banner_3_darker.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
}`)

  return (
    <Layout>
      <Seo title="Download" />
      <Banner
        imageFluid={images.banner.childImageSharp.gatsbyImageData}
        text="Download"
      />
      <Container>
        <DownloadText>
          <p>
            Get the latest Releases on GitHub
          </p>
        </DownloadText>

        <Flex>
          <DownloadButtonPhoebus />
        </Flex>

        <h2>Site Specific Versions</h2>
        <SiteSpecificVersions />
        <div style={{ marginBottom: `1rem` }}></div>
      </Container>
    </Layout>
  );
}

export default Download
