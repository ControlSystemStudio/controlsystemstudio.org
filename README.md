<img src="/src/images/CSS_logo_2019_darkblue_no border_v08.svg" width="200px">

# controlsystemstudio.org [![Netlify Status](https://api.netlify.com/api/v1/badges/92876b0c-4565-41e5-ae0f-7c9a24b363d7/deploy-status)](https://app.netlify.com/sites/inquisitive-malabi-c369c9/deploys)

Redesign of the website for Control System Studio (CS-Studio). Made using GatsbyJS and hosted on netlify. 

https://peaceful-jackson-f187cb.netlify.app/

## Developing/Testing locally
Gatsby has a fantastic development server feature, which allows you to preview the page immediately without building it. This project uses Gatsby version 5 which REQUIRES Node 18. The project will not build with a lower version of Node and npm. 
You may get a warning about peer dependency resolution with npm packages. This is because Gatsby 5 has a peer dependency on an unreleased version of React. Make sure to install all npm dependencies using `npm install` the first time you run the site. The project should build and run without issue, however. If you encounter an issue installing packages, run `npm install --legacy-peer-deps`.
    
    $ npm install
    $ npm start
  
## Building
To run the site on a server, it needs to be built first.

    $ npm install
    $ npm run build
    $ npm run serve
  
The website files can be found in `public`.

## Editing content
Pages are written in the JSX format, which is similar to HTML, but behaves differently in certain usecases.
Simple paragraphs and lists can be written in the familiar HTML format, but images are embedded in a different way.
Images are places inside `src/images` and queried using GraphQL.
    
    opi: file(
        relativePath: { eq: "CS-Studio-OPIs_and_Keyvisual_v03_big.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 3840, height: 2160, layout: CONSTRAINED)
        }
      }

The layout property can be set to CONSTRAINED (for images of a set size) or FULLWIDTH (for properties that span the full width of the screen. This query is included inside of the useStaticQuery hook inside of the main component of the page.
The image can then be displayed using

    <GatsbyImage
          image={images.opi.childImageSharp.fluid}
          style={{ width: `80%`, margin: `3rem 0 4rem` }}
    />

For more detail please refer to the [Gatsby documentation](https://www.gatsbyjs.org/docs/working-with-images/).

## Downloads
Because links to downloads can be updated quite frequently, they are separated from the Download page to make editing them a little easier. You can find the file where you can define each link necessary in `src/utils/downloadinfo.js`
