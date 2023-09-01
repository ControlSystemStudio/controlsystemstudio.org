import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Banner from "../components/banner"

const About = () => {
  const images = useStaticQuery(graphql`{
  banner: file(
    relativePath: {eq: "banners/CS-Studio-Keyvisual_banner_4_darker.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
  opi: file(relativePath: {eq: "CS-Studio-OPIs_and_Keyvisual_v03_big.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  displayBuilderRuntime: file(relativePath: {eq: "displayBuilderRuntime.png"}) {
    childImageSharp {
      gatsbyImageData(width: 487, layout: CONSTRAINED)
    }
  }
  displayBuilderEditor: file(relativePath: {eq: "displayBuilderEditor.png"}) {
    childImageSharp {
      gatsbyImageData(width: 487, layout: CONSTRAINED)
    }
  }
  channelTable: file(relativePath: {eq: "channelTable.png"}) {
    childImageSharp {
      gatsbyImageData(width: 487, layout: CONSTRAINED)
    }
  }
  alarmLog: file(relativePath: {eq: "alarmLog.png"}) {
    childImageSharp {
      gatsbyImageData(width: 487, layout: CONSTRAINED)
    }
  }
  alarmTable: file(relativePath: {eq: "alarmTable.png"}) {
    childImageSharp {
      gatsbyImageData(width: 487, layout: CONSTRAINED)
    }
  }
  saveAndRestore: file(relativePath: {eq: "saveAndRestore.png"}) {
    childImageSharp {
      gatsbyImageData(width: 487, layout: CONSTRAINED)
    }
  }
  databrowser: file(relativePath: {eq: "dataBrowser.png"}) {
    childImageSharp {
      gatsbyImageData(width: 487, layout: CONSTRAINED)
    }
  }
  logBook: file(relativePath: {eq: "logBook.png"}) {
    childImageSharp {
      gatsbyImageData(width: 487, layout: CONSTRAINED)
    }
  }
}`)

  return (
    <Layout>
      <SEO title="Applications" />
      <Banner
        imageFluid={images.banner.childImageSharp.gatsbyImageData}
        text="Applications"
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
            purposes are more obvious not only to the end user but also to tools
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
        <GatsbyImage
          image={images.displayBuilderRuntime.childImageSharp.gatsbyImageData}
          style={{ maxWidth: 437 }}
        />
        <GatsbyImage
          image={images.displayBuilderEditor.childImageSharp.gatsbyImageData}
          style={{ maxWidth: 437 }}
        />
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
          The Display Builder is available for both the current Phoebus-based development 
          and the original Eclipse-based CS-Studio. In addition, a
          purely web based runtime is available for remotely viewing displays.
        </p>
        <GatsbyImage
          image={images.opi.childImageSharp.gatsbyImageData}
          style={{ maxWidth: `80%`, margin: `3rem 0 4rem` }}
        />
        {/** Channel Table */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Channel Table</h2>
        <p>
          Info on Channel Table to be completed.
        </p>
        <GatsbyImage
          image={images.channelTable.childImageSharp.gatsbyImageData}
          style={{ maxWidth: 437 }}
        />
        {/** Alarm Applications **/}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Alarm Table</h2>
        <p>
          Alarm Table info to be completed. 
        </p>
        <GatsbyImage
          image={images.alarmTable.childImageSharp.gatsbyImageData}
          style={{ maxWidth: 437 }}
        />
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Alarm Log</h2>
        <p>
          Alarm Log info to be completed.
        </p>
        <GatsbyImage
          image={images.alarmLog.childImageSharp.gatsbyImageData}
          style={{ maxWidth: 437 }}
        />
        {/** Save & Restore */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Save/Restore</h2>
        <p>
          Info on Save/Restore to be completed.
        </p>
        <GatsbyImage
          image={images.saveAndRestore.childImageSharp.gatsbyImageData}
          style={{ maxWidth: 437 }}
        />
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>DataBrowser</h2>
        <p>
          The Data Browser is a CSS tool for displaying live as well as
          Archived control system data in a Strip-Chart type plot.
        </p>
        <GatsbyImage
          image={images.databrowser.childImageSharp.gatsbyImageData}
          style={{ maxWidth: 437 }}
        />
        <p>
          The current plot can be emailed or sent to a log book or as email.
        </p>
        {/** Logbook **/}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Logbook</h2>
        <p>
          Logbook info to be completed. 
        </p>
        <GatsbyImage
          image={images.alarmTable.childImageSharp.gatsbyImageData}
          style={{ maxWidth: 437 }}
        />
      </Container>
    </Layout>
  );
}

export default About
