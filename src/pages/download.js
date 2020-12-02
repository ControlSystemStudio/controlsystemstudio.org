import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { faLinux, faApple, faWindows } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
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

const OSButtons = styled.div`
  margin: 0 0 1rem;
  button {
    background-color: #ffffff;
    border: none;
    cursor: pointer;
    margin: 0 1rem 1rem;
  }

  button:hover {
    color: #00293f;
  }

  .osLinux {
    color: ${props =>
      props.OSName === "Linux" || props.OSName === "Other"
        ? "#004160"
        : "#000000"};
    border-bottom: ${props =>
      props.OSName === "Linux" || props.OSName === "Other"
        ? "2px solid #004160"
        : "none"};
  }

  .osMac {
    color: ${props => (props.OSName === "Mac" ? "#004160" : "#000000")};
    border-bottom: ${props =>
      props.OSName === "Mac" ? "2px solid #004160" : "none"};
  }

  .osWindows {
    color: ${props => (props.OSName === "Windows" ? "#004160" : "#000000")};
    border-bottom: ${props =>
      props.OSName === "Windows" ? "2px solid #004160" : "none"};
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

const StyledDownloadButtonDev = styled(StyledDownloadButton)`
  background-color: #ffffff;
  color: #004160;

  &:hover {
    color: #ffffff;
    background-color: #004160;
    border: 2px solid #004160;
  }
`

const DownloadSubtext = styled.p`
  text-align: center;
  font-size: 0.85rem;
  padding: 0.835rem 0.935rem;
`

const DownloadButton = ({ link, os }) => (
  <div>
    <StyledDownloadButton href={link}>
      <FontAwesomeIcon icon={faDownload} /> Download Control System Studio
    </StyledDownloadButton>
    <DownloadSubtext>
      Version {dlInfo.downloadVersion} for {os} |{" "}
      <a href={dlInfo.allDownloads}>Other Versions</a>
    </DownloadSubtext>
  </div>
)

const DevDownloadButton = () => (
  <div>
    <StyledDownloadButtonDev href={dlInfo.downloadDev}>
      <FontAwesomeIcon icon={faDownload} /> Download Development Build
    </StyledDownloadButtonDev>
    <DownloadSubtext>Version {dlInfo.downloadDevVersion}</DownloadSubtext>
  </div>
)

const Download = () => {
  const [OSName, setOSName] = useState("Other")

  useEffect(() => {
    setOSName(detectOS())
  }, [])

  const images = useStaticQuery(graphql`
    query {
      banner: file(
        relativePath: { eq: "banners/CS-Studio-Keyvisual_banner_3_darker.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3300, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Download" />
      <Banner
        imageFluid={images.banner.childImageSharp.fluid}
        text="Download"
      />
      <Container>
        <Flex>
          <OSButtons OSName={OSName}>
            <button onClick={() => setOSName("Linux")} className="osLinux">
              <FontAwesomeIcon icon={faLinux} /> Linux
            </button>
            <button onClick={() => setOSName("Mac")} className="osMac">
              <FontAwesomeIcon icon={faApple} /> Mac
            </button>
            <button onClick={() => setOSName("Windows")} className="osWindows">
              <FontAwesomeIcon icon={faWindows} /> Windows
            </button>
          </OSButtons>
        </Flex>
        <Flex>
          {(OSName === "Linux" || OSName === "Other") && (
            <DownloadButton link={dlInfo.downloadStableLinux} os={"Linux"} />
          )}

          {OSName === "Mac" && (
            <DownloadButton link={dlInfo.downloadStableMac} os={"Mac"} />
          )}

          {OSName === "Windows" && (
            <DownloadButton
              link={dlInfo.downloadStableWindows}
              os={"Windows"}
            />
          )}
          <DevDownloadButton />
        </Flex>
        <h2>Site Specific Versions</h2>
        <SiteSpecificVersions />
        <div style={{ marginBottom: `1rem` }}></div>
      </Container>
    </Layout>
  )
}

const detectOS = () => {
  let OSName = "Other"
  if (window.navigator.userAgent.indexOf("Windows") !== -1) OSName = "Windows"
  if (window.navigator.userAgent.indexOf("Mac") !== -1) OSName = "Mac"
  if (window.navigator.userAgent.indexOf("Linux") !== -1) OSName = "Linux"

  return OSName
}

export default Download
