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
    relativePath: {eq: "banners/CS-Studio-Keyvisual_banner_8_darker.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
}`)

  return (
    <Layout>
      <SEO title="Services" />
      <Banner
        imageFluid={images.banner.childImageSharp.gatsbyImageData}
        text="Services"
      />
      <Container style={{ marginTop: `2rem` }}>
        {/** Alarm Services **/}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Alarm Services</h2>
        <p>
          There are three services which combine to make up a complete solution for control system alarm handling.
          The core service is the Alarm Server which is based on Zookeeper and Kafka.
          The Alarm Server contains user-defined alarm configurations persisted in Zookeeper.
          These will list PVs of interest organized in a tree hierarchy to arbitrary depth.
          Configuration files also contain additional information consumed by the alarm views,
          e.g. guidance texts or links to control displays. The Alarm Server will send real time
          messages to clients via Kafka data streams.
        </p>
        <p>
          The second service is the Alarm Logger which is based on ElasticSearch and keeps a history
          of all alarm messages and events which can be searched and filtered by clients.
          Lastly, the Alarm Configuration Logger keeps track of any changes made to the configurations
          in the Alarm Server and versions these changes in a git repository.
        </p>
        {/** Channel Finder */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Channel Finder Service</h2>
        <p>
          The Channel Finder service is a simple directory service which gives clients the ability to search
          for channel names and associated meta-data with complex queries. Backed by ElasticSearch, the directory
          data consists of a set of Channels, with an arbitrary set of Properties (name-value pairs), and an arbitrary
          set of Tags (names). These channels can be then queried based on the channel name, property value and tags.
        </p>
        {/** Logbook Service**/}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Logbook Service</h2>
        <p>
          The Logbook Service (OLOG) is an electronic logbook which allows for the creation and retrieval of log entries.
          The service was developed to address the needs of operators, engineers, and users of large scientific facilities.
          Since these log entries are stored in Elasticsearch, the service also supports a powerful search API.
          Search criteria include log entry title and body or its meta-data (author, date, tags, properties), or both.
        </p>
        <p>
          For basic formatting the log entry body is authored using Markdown, which is converted by clients to HTML.
          Attachments of any kind may be added to log entries. These are persisted in MongoDB by the service.
          Attachments can be searched by type. Clients will render thumbnail previews of image attachments.
        </p>
        {/** Save & Restore */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Save & Restore Service</h2>
        <p>
          The save-and-restore service implements service as a collection of REST endpoints.
          These can be used by clients to manage configurations (aka save sets) and snapshots,
          to compare snapshots and to restore PV values from snapshots. This service is a Spring Boot-based
          application using Elasticsearch for data persistence.
        </p>
        {/** Scan */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Scan Server</h2>
        <p>
          The scan system can automate experiments by running scans on a central server.
          For example, it can move a motor from some start position to an end position in certain steps,
          waiting at each step until experiment data has been taken. A scan can
          consist of several nested loops. For example, at each step of moving
          the "horizontal" position of a sample, an inner loop can vary the
          "vertical" position of the sample to perform a 2-dimensional scan of
          the sample surface. As another example, an outer loop may vary the
          sample temperature while inner loops vary the sample position.
        </p>
        <p>
          By running the scans on a central server, there are less worries that a script gets
          canceled accidentally on a client machine and all the logs and history of scans can
          be easily accessed by system experts.
        </p>
        <p>
          <a href="http://htmlpreview.github.io/?https://github.com/ControlSystemStudio/cs-studio/blob/master/applications/scan/scan-plugins/org.csstudio.scan.ui/doc/scansystem.html">
            Read more
          </a>
        </p>
        
      </Container>
    </Layout>
  );
}

export default About
