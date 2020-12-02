import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import Grid from "./grid"

const Site = styled.div`
  background-color: #f5f5f5;
  padding: 2rem 1rem;
  margin: 0.6rem 0;
  text-align: center;
`

const StyledDownloadButton = styled.a`
  text-decoration: none;
  background-color: #1a5c7a;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5rem 0.6rem;
  border: 2px solid #1a5c7a;

  &:hover {
    color: #ffffff;
  }
`

const SiteSpecificVersions = () => {
  return (
    <Grid>
      <Site>
        <h3>DESY</h3>
        <StyledDownloadButton
          href="http://css.desy.de/content/e413/e2767/index_eng.html"
          target="_blank"
          rel="noopener noreferrer"
        >
            CSS DESY KRYO <FontAwesomeIcon icon={faExternalLinkAlt} />
        </StyledDownloadButton>
      </Site>
      <Site>
        <h3>ESS</h3>
        <StyledDownloadButton
          href="https://confluence.esss.lu.se/display/CR/ESS+CS-Studio+Releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          ESS CS-Studio <FontAwesomeIcon icon={faExternalLinkAlt} />
        </StyledDownloadButton>
      </Site>
      <Site>
        <h3>KEK</h3>
        <StyledDownloadButton
          href="http://www-linac.kek.jp/cont/css/"
          target="_blank"
          rel="noopener noreferrer"
        >
          KEK CS-Studio <FontAwesomeIcon icon={faExternalLinkAlt} />
        </StyledDownloadButton>
      </Site>
      <Site>
        <h3>NSLSII</h3>
        <StyledDownloadButton
          href="http://cs-studio.sourceforge.net/nsls2/nsls2.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          NSLSII CS-Studio <FontAwesomeIcon icon={faExternalLinkAlt} />
        </StyledDownloadButton>
      </Site>
      <Site>
        <h3>SNS</h3>
        <StyledDownloadButton
          href="https://controlssoftware.sns.ornl.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SNS CS-Studio <FontAwesomeIcon icon={faExternalLinkAlt} />
        </StyledDownloadButton>
      </Site>
      <Site>
        <h3>RAON</h3>
        <StyledDownloadButton
          href="https://sourceforge.net/projects/cs-studio/files/raon-release/"
          target="_blank"
          rel="noopener noreferrer"
        >
          RAON CS-Studio <FontAwesomeIcon icon={faExternalLinkAlt} />
        </StyledDownloadButton>
      </Site>
    </Grid>
  )
}

export default SiteSpecificVersions
