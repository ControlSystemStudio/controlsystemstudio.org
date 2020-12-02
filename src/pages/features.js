import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Banner from "../components/banner"

const About = () => {
  const images = useStaticQuery(graphql`
    query {
      banner: file(
        relativePath: { eq: "banners/CS-Studio-Keyvisual_banner_4_darker.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3300, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      opi: file(
        relativePath: { eq: "CS-Studio-OPIs_and_Keyvisual_v03_big.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3840, maxHeight: 2160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      beast: file(relativePath: { eq: "beast.png" }) {
        childImageSharp {
          fluid(maxWidth: 487) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      databrowser: file(relativePath: { eq: "databrowserabout.png" }) {
        childImageSharp {
          fluid(maxWidth: 487) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Features" />
      <Banner
        imageFluid={images.banner.childImageSharp.fluid}
        text="Features"
      />
      <Container style={{ marginTop: `2rem` }}>
        <h2>Display Builder</h2>
        <p>
          The Display Builder is an operator interface panel builder for
          CS-Studio. Driven by changes in computer graphics technology and
          trends, EPICS operator interface tools tend to undergo fundamental
          transformations every 10 years, recently accelerating.
        </p>
        <p>
          The Display Builder aims to minimize these transitions. It is in large
          parts backwards compatible with the original CS-Studio{" "}
          <code>BOY</code> tool. There are translation tools from EDM and MEDM.
        </p>
        <p>Key features include:</p>
        <ul>
          <li>
            Heavy use of threading. Display files are loaded in background
            threads, related displays are loaded in parallel, plot images are
            prepared in separate threads, scripts are executed off the user
            interface thread.
          </li>
          <li>
            Large number of single-purpose widgets. For example, an{" "}
            <code>Ellipse</code>
            for static graphics, an <code>LED</code> that changes between on/off
            states based on a PV, and a <code>Multi State LED</code> that
            changes between more than two PV states. Widgets with specific
            purpose are more obvious not only to the end user but also to tools
            which translate between display file formats.
          </li>
          <li>
            The PV layer supports EPICS Channel Access, PV Access, local PVs,
            simulated PVs, but also other protocols like MQTT. The data flow is
            controlled using the Reactive Extensions for Java.
          </li>
          <li>
            Model, Representation, Runtime and Editor are strictly separate
            modules, allowing each to evolve separately.
          </li>
          <li>
            The Representation is based on JavaFX, the most modern Java GUI
            library, but as mentioned the representation is fundamentally
            separate from the model and runtime. In principle, we could replace
            the graphics library, and a proof-of-concept had indeed been
            implemented based on SWT.
          </li>
        </ul>
        <p>The Display Builder file format is "compact XML" similar to this:</p>
        <pre>
          <code>
            {`<widget type="label">
  <x>100</x>
  <y>200</y>
  <text>Hello</text>
<widget>`}
          </code>
        </pre>

        <p>
          Such an XML format can be read and written by many tools, simplifying
          the programmatic generation of displays. The minimal nature without
          any direct references to the display builder will simplify future
          moves to the next greatest EPICS display tool.
        </p>
        <p>
          The Display Builder is available for both the original Eclipse-based
          CS-Studio and the current Phoebus-based development. In addition, a
          purely web based runtime is available for remotely viewing displays.
        </p>
        <Img
          fluid={images.opi.childImageSharp.fluid}
          style={{ maxWidth: `80%`, margin: `3rem 0 4rem` }}
        />
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>BEAST - The Best Ever Alarm System Toolkit</h2>
        <p>
          This is the distributed alarm system developed at the SNS, consisting
          of
        </p>
        <ul>
          <li>
            Alarm Server that uses channel access to monitor alarm triggers in
            the control system
          </li>
          <li>
            CSS user interface for viewing current alarms as a table or
            hierarchical tree
          </li>
          <li>Relational Database for configuration and logging</li>
          <li>
            Web reports to analyze the number and frequency of alarms, search
            the alarm configuration etc.
          </li>
        </ul>
        <p>The user interface allows operators to</p>
        <ul>
          <li>Access guidance on how to handle a specific alarm</li>
          <li>
            Invoke links to related operator interfaces or other CSS tools for
            the alarm trigger PVs
          </li>
          <li>Acknowledge alarms Edit the configuration</li>
        </ul>
        <Img
          fluid={images.beast.childImageSharp.fluid}
          style={{ maxWidth: 437 }}
        />
        <p>
          See also: ICALEPCS 2009 presentation{" "}
          <a href="http://icalepcs2009.spring8.or.jp/abstract/pdf/TUA001_TALK.PDF">
            http://icalepcs2009.spring8.or.jp/abstract/pdf/TUA001_TALK.PDF
          </a>
        </p>
        <p>
          <a href="https://github.com/ControlSystemStudio/cs-studio/wiki/BEAST">
            Read more
          </a>
        </p>
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>BOY - Best OPI, Yet</h2>
        <p>
          CSS BOY is an Operator Interface (OPI) development and runtime
          environment. An OPI is a general GUI but with extra facilities to
          connect to your live data directly.
        </p>
        <p>
          CSS BOY allows building your GUI with drag and drop and connecting to
          your data instantly. It also allows using JavaScript or Jython to
          manipulate the GUI in a very similar way as using JavaScript in HTML.
        </p>
        <p>
          In BOY, the OPI Editor is a WYSIWYG (What You See Is What You Get)
          editor which allows you to create your GUI in a similar way of
          creating PPT. The OPI Runtime works in a similar way as modern web
          browsers. One can display the OPIs either in tabs, windows or views
          and navigate OPIs forward or backward. An OPI is a regular XML file
          that can be edited in OPI editor or text editor and run in OPI
          Runtime. No compilation is needed.
        </p>
        <p>
          The data communication layer is a separate layer which allows BOY
          connecting to various data sources seamlessly. Users can provide their
          own data source by extending an Eclipse extension point. Currently, it
          supports EPICS, local, simulated and system data sources. Potentially,
          it could support OPC, DDS, Tango or your own data source.
        </p>
        <p>
          BOY is a set of Eclipse plugins written in Java, which means it can be
          integrated in any Eclipse RCP application. It has been tested that BOY
          runs well on Windows, Unix and X OS platforms.
        </p>
        <p>
          <a href="https://github.com/ControlSystemStudio/cs-studio/wiki/BOY">
            Read more
          </a>
        </p>
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>DataBrowser</h2>
        <p>
          The Data Browser is a CSS tool for displaying live as well as
          ArchiveSupport historic LiveDataSupport control system data in a
          Strip-Chart type plot.
        </p>
        <Img
          fluid={images.databrowser.childImageSharp.fluid}
          style={{ maxWidth: 437 }}
        />
        <p>
          The current plot can be emailed or sent to a log book or as email.
        </p>
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Logbook Support</h2>
        <p>
          The Data Browser, PACE and maybe other tools use org.csstudio.logbook
          for making electronic entries.
        </p>
        <p>
          There are pluggable implementations for the SNS "ELog" and maybe
          others.
        </p>
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Scan Client</h2>
        <p>
          The scan system can automate experiments. For example, it can move a
          motor from some start position to an end position in certain steps,
          waiting at each step until experiment data has been taken. A scan can
          consist of several nested loops. For example, at each step of moving
          the "horizontal" position of a sample, an inner loop can vary the
          "vertical" position of the sample to perform a 2-dimensional scan of
          the sample surface. As another example, an outer loop may vary the
          sample temperature while inner loops vary the sample position.
        </p>
        <p>
          <a href="http://htmlpreview.github.io/?https://github.com/ControlSystemStudio/cs-studio/blob/master/applications/scan/scan-plugins/org.csstudio.scan.ui/doc/scansystem.html">
            Read more
          </a>
        </p>
      </Container>
    </Layout>
  )
}

export default About
