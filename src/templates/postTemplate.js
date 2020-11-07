import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import H4 from '../components/Typeography/H4'
import Body1 from '../components/Typeography/Body1'
import styled from 'styled-components'

const BlueTopSection = styled.div`
  width: 100%;
  height: 200px;
  background: #e9f1f6;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  margin-top: -20px;
`

const PostCard = styled.div`
  padding: 30px;
  width: 730px;
  border-radius: 4px;

  box-shadow: 0 0 4px -1px rgba(0, 0, 0, 0.2), 0 0 10px 0 rgba(0, 0, 0, 0.12),
    0 0 5px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  margin-bottom: 50px;
  margin-top: 30px;

  @media only screen and (max-width: 1024px) {
    width: 65vw;
    margin-left: 20px;
  }

  @media only screen and (max-width: 767px) {
    width: 100vw;
    margin-left: 20px;
    margin-right: 20px;
  }
`

const Divider = styled.div`
  height: 1px;
  background-color: #848484;
  margin-top: 30px;
  margin-bottom: 30px;
`

function Template({ location, data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout location={location} onPostPage={true}>
      <BlueTopSection />
      <PostCard>
        <H4>{frontmatter.title}</H4>
        <Body1
          css={`
            padding-top: 10px;
          `}
        >
          {frontmatter.subHeading}
        </Body1>
        <Divider />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </PostCard>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      id
      html
      frontmatter {
        title
        subHeading
        subCategory
      }
    }
  }
`
