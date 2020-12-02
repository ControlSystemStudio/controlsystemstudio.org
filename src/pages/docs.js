import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGraduationCap, faBullhorn, faLightbulb, faThumbsUp, faSyncAlt } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Banner from "../components/banner"
import Grid from "../components/grid"

const Showcase = styled.a`
text-align: center;
padding: 1rem;
margin: 0.6rem 0;
background-color: #f5f5f5;
text-decoration: none;
color: #00293f;
transition: 100ms ease-in;

p:last-child {
  margin-bottom: 0;
}

&:hover {
    color: #004160;
    box-shadow: 0 0 3px 1px #0c0c0c;
}
`

const About = () => {
  const images = useStaticQuery(graphql`
    query {
      banner: file(
        relativePath: { eq: "banners/CS-Studio-Keyvisual_banner_6_darker.png" }
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
      <SEO title="Docs" />
      <Banner imageFluid={images.banner.childImageSharp.fluid} text="Docs" />
      <Container>
        <Grid className="docsgrid" style={{ marginBottom: `2rem` }} >
          <Showcase
            href="http://cs-studio.sourceforge.net/docbook/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGraduationCap} size="2x" />
            <h3>Guidebook</h3>
            <p>
            Manual for building and using CS-Studio
            </p>
          </Showcase>
          <Showcase
            href="https://drive.google.com/drive/folders/0B_ikNAN_jxjPR05WbFFuRmliMnc?tid=0Bxrrhhn0aTLWNS0teDEtNzRkVnc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faBell} size="2x" />
            <h3>Management Review Meetings</h3>
            <p>
              Reports from the yearly meetings for collaboration, policy and objectives
            </p>
          </Showcase>
          <Showcase
            href="https://drive.google.com/folderview?id=0B_ikNAN_jxjPWmF6b3plYV8zbWM&usp=sharing_eid&tid=0Bxrrhhn0aTLWNS0teDEtNzRkVnc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faBullhorn} size="2x" />
            <h3>Meeting Minutes</h3>
            <p>
              Minutes from the monthly meetings
            </p>
          </Showcase>
          <Showcase
            href="https://github.com/ControlSystemStudio/cs-studio/labels/project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLightbulb} size="2x" />
            <h3>Product Realization</h3>
            <p>Specifications and interfaces, design and development</p>
          </Showcase>
          <Showcase
            href="https://docs.google.com/forms/d/1XFHA-tD1oWtcQiHW3IuMpnc6n5pM-b7wxZUp7Xq8Mps/viewanalytics#start=publishanalytics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faThumbsUp} size="2x" />
            <h3>Customer requirements and customer satisfaction</h3>
            <p>User stories and customer feedback</p>
          </Showcase>
          <Showcase
            href="https://github.com/ControlSystemStudio/cs-studio/pulse"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSyncAlt} size="2x" />
            <h3>Measurement, analysis and improvement</h3>
            <p>Releases are monthly "sprints". Corrective/preventative action. Control of nonconforming product. Internal audits.</p>
          </Showcase>
          <Showcase
            href="http://sourceforge.net/p/cs-studio/mailman/cs-studio-core"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <h3>Notices</h3>
            <p>Notices are emailed to the core email list</p>
          </Showcase>
        </Grid>
        <h2>Policy</h2>
        <p>
          Through a strategy of continuous improvement and teamwork, the Control
          System Studio Collaboration is dedicated to supplying control system
          tools for machine and experiment operator interfaces, automation and
          service integration to enable our users to achieve their scientific
          objectives.
        </p>
        <p>The foundation for achieving our commitment is based on:</p>
        <ul>
          <li>understanding and meeting the requirements of our users,</li>
          <li>
            continuously improving all processes related to the Control System
            Studio product,
          </li>
          <li>
            effectively utilizing the creative talents in the collaboration,
          </li>
          <li>and meeting statutory, regulatory, and other requirements.</li>
        </ul>
        <h2>Objectives</h2>
        <ul>
          <li>
            90% User satisfaction from registered sites with a site
            representative
          </li>
          <li>
            90% Developer satisfaction from registered sites with a site
            representative
          </li>
        </ul>
      </Container>
    </Layout>
  )
}

export default About
