import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Collaboration from "../components/collaboration"
import Banner from "../components/banner"
import Grid from "../components/grid"
import "../components/about.css"

const Member = styled.div`
padding: 1rem;
margin: 0.5rem;
background-color: #f5f5f5;
text-decoration: none;
color: #00293f;
transition: 100ms ease-in;
&:hover {
    color: #004160;
    box-shadow: 0 0 3px 1px #0c0c0c;
}
h4 {
  margin-bottom: 0.1rem;
}
`
const Role = styled.div`
color: #808080;
font-size: 10px;
`

const Site = styled.div`
  font-size: 12px;
  line-height: 110%;
  margin-bottom: 10px;
`


const About = () => {
  const images = useStaticQuery(graphql`{
  banner: file(
    relativePath: {eq: "banners/CS-Studio-Keyvisual_banner_2_darker.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
}`)
  return (
    <Layout>
      <SEO title="About" />
      <Banner imageFluid={images.banner.childImageSharp.gatsbyImageData} text="About" />
      <Container>
        <p style={{ marginBottom: `0` }}>
          Control System Studio is a collection of tools and applications to monitor and operate 
          large scale control systems, such as the ones in the accelerator community.
        </p>

        <div style={{ marginTop: `3rem`, marginBottom: `3rem` }}>
          <h2>Meet Our Team</h2>
          <Grid className="docsgrid" style={{ marginBottom: `2rem` }} >
            <Member>
              <h4>Kunal Shroff</h4>
              <Role>Community Manager</Role>
              <Site>National Synchrotron Light Source II (NSLSII) at BNL</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/shroffk" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>Kay Kasemir</h4>
              <Role>Site Representative</Role>
              <Site>Spallation Neutron Source (ORNL)</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/kasemir" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>Ralph Lange</h4>
              <Role>Site Representative</Role>
              <Site>ITER</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/ralphlange" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>Wesley Moore</h4>
              <Role>Site Representative</Role>
              <Site>Jefferson Lab (JLab)</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/wmoore28" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>Ivan Finch</h4>
              <Role>Site Representative</Role>
              <Site>ISIS</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/DominicOram" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>Charles-Henry Patard</h4>
              <Role>Site Representative</Role>
              <Site>GANIL/Spiral2</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/charlesHenryPATARD" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>Joerg Penning</h4>
              <Role>Site Representative</Role>
              <Site>DESY</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/jpenning" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>Lorenzo Gomez</h4>
              <Role>Site Representative</Role>
              <Site>Windhover Labs</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/lorenzo-gomez-windhover" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>Gustavo Ciotto Pinton</h4>
              <Role>Site Representative</Role>
              <Site>Laboratório Nacional de Luz Síncrotron (LNLS)</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/gciotto" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>Yongxiang Qiu</h4>
              <Role>Site Representative</Role>
              <Site>CSNS</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/ksdj" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>Martin Gaughran</h4>
              <Role>Site Representative</Role>
              <Site>Diamond Light Source</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/MJGaughran" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>Fredrik S&ouml;derberg</h4>
              <Role>Site Representative</Role>
              <Site>European Spallation Source</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/fredrik-soderberg" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>손창욱 (C.W. Son)</h4>
              <Role>Site Representative</Role>
              <Site>Korean Heavy Ion Accelerator (RAON)</Site>
            </Member>
            <Member>
              <h4>Georg Weiss</h4>
              <Role>Site Representative</Role>
              <Site>European Spallation Source</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/georgweiss" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>Xinyu Wu</h4>
              <Role>Site Representative</Role>
              <Site>CSIRO</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/xinyuwu" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>Tanvi Ashwarya</h4>
              <Role>Site Representative</Role>
              <Site>FRIB</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/tanviash" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>Dariusz Jarosz</h4>
              <Role>Site Representative</Role>
              <Site>Advanced Photon Source (ANL)</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/iTerminate" className="social_github"></a>
                </li>
              </ul>
            </Member>
            <Member>
              <h4>Tynan Ford</h4>
              <Role>Site Representative</Role>
              <Site>Advanced Light Source (LBNL)</Site>
              <ul className="social-icons social-icons-color">
                <li>
                  <a href="https://github.com/tynanford" className="social_github"></a>
                </li>
              </ul>
            </Member>
          </Grid>

        </div>
        <div style={{ marginTop: `3rem`, marginBottom: `3rem` }}>
          <h2>Contact</h2>
          <p>
            User Level Questions:{" "}
            <a
              href="http://www.aps.anl.gov/epics/tech-talk/"
              target="_blank"
              rel="noopener noreferrer"
            >EPICS Tech-Talk Mailing list</a>
          </p>
          <p>Developer Level Questions: <a
              href="mailto:cs-studio-core@lists.sourceforge.net"
            >cs-studio-core@lists.sourceforge.net</a></p>
          <p>Report Bugs/Problems: <a
              href="https://github.com/ControlSystemStudio/cs-studio/issues"
              target="_blank"
              rel="noopener noreferrer"
            >GitHub Issue Tracker</a></p>
          <Collaboration style={{ marginTop: `3rem` }}/>
        </div>
      </Container>
    </Layout>
  );
}

export default About
