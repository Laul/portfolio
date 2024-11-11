import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by jgfv the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://www.gatsbyjs.com/static/5b3d5aedde3f9fe6f43af137058f2031/4ef49/index-page-with-static-image-from-filesystem.png"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage