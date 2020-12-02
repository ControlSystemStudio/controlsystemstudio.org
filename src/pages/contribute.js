import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Banner from "../components/banner"

const About = () => {
  const images = useStaticQuery(graphql`
    query {
      banner: file(
        relativePath: { eq: "banners/CS-Studio-Keyvisual_banner_5_darker.png" }
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
      <SEO title="Contribute" />
      <Banner imageFluid={images.banner.childImageSharp.fluid} text="Contribute" />
      <Container>
        <h1>How to Contribute to CS-Studio</h1>
        <ul>
          <li>
            CS-Studio development is hosted on Github. You will need a Github
            account.
          </li>
          <li>
            The most complete documentation for developers, including how to
            import into Eclipse and build CS-Studio, is the{" "}
            <a
              href="http://cs-studio.sourceforge.net/docbook/pt01.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              docbook
            </a>
            .
          </li>
        </ul>
        <h2>Fork us on Github</h2>
        <p>
          All contributions are accepted as Pull Requests on{" "}
          <a
            href="https://github.com/ControlSystemStudio/cs-studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          .
        </p>
        <h2>Attend Meetings</h2>
        <ul>
          <li>
            We use Google Hangouts to share our progress and discuss issues,
            follow us on{" "}
            <a
              href="https://plus.google.com/101349549663920375487/posts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Plus
            </a>
          </li>
          <li>Meetings are posted (viewable after being added to group)</li>
          <li>
            Minutes are posted to{" "}
            <a
              href="https://drive.google.com/folderview?id=0B_ikNAN_jxjPWmF6b3plYV8zbWM&amp;usp=sharing_eid&amp;tid=0Bxrrhhn0aTLWNS0teDEtNzRkVnc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Docs
            </a>
          </li>
          <li>We meet the first Wednesday of each month (9am EST)</li>
          <li>Project groups meet once a week when actively developing</li>
        </ul>
        <h2>Reporting Problems</h2>
        <p>
          When in doubt or have a question, you should{" "}
          <a
            href="https://github.com/ControlSystemStudio/cs-studio/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            open a ticket
          </a>
          .
        </p>
        <h2>Development Guidelines</h2>
        <ul>
          <li>
            For the code conventions we are using, see{" "}
            <a
              href="https://github.com/ControlSystemStudio/cs-studio/wiki/CodingGuidelines"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodingGuidelines
            </a>
            .
          </li>
          <li>
            For the Git workflow, see{" "}
            <a
              href="https://github.com/ControlSystemStudio/cs-studio/wiki/DevelopmentGuidelines"
              target="_blank"
              rel="noopener noreferrer"
            >
              DevelopmentGuidelines
            </a>
            .
          </li>
        </ul>
        <h2>Contribute a patch</h2>
        <ul>
          <li>
            Open a ticket corresponding to the work you are about to do. This
            helps keep track of new developments.
          </li>
          <li>
            Create a branch starting from one of the active branches and develop
            on the new branch.
          </li>
          <li>
            <a
              href="https://github.com/ControlSystemStudio/cs-studio/pulls"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit a pull request
            </a>
          </li>
          <li>
            There should be some discussion and we will help you to get your
            patch merged.
          </li>
        </ul>
        <h2>New Plug-ins</h2>
        <p>
          Plug-ins may be part of 'core', 'applications', or a site's specific
          product. Ask if you are unsure of the best location. New plugins are
          typically added to a feature in order to be installed in a product.
        </p>
        <p>
          Use the Bundle-Vendor property of the manifest file of each plug-in
          (also visible in Eclipse in Overview/General Information/Provider) to
          record the author/maintainer in the following form:
        </p>
        <p>
          <code>{`Name Surname <email>[[Name Surname <email>|,]] - Site`}</code>
        </p>
        <p>
          For example:{" "}
          <code>{`Gabriele Carcassi <carcassi@bnl.gov>, Kunal Shroff <kshroff@bnl.gov> - Brookhaven National Lab`}</code>
        </p>
      </Container>
    </Layout>
  )
}

export default About
