import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import PostLink from '../components/PostLink'
import { ContactIcon } from '../components/Icons'
import SubCard from '../components/SubCategoryCard'
import CategoryTitle from '../components/CategoryTitle'
import HelpPrompt from '../components/HelpPrompt'

const BlueTopSection = styled.div`
  width: 100%;
  height: 340px;
  background: #e9f1f6;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  margin-top: -20px;
`

const HelpPromptPadding = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
`

const TitleMargin = styled.div`
  margin-top: 20px;
`

const Category = ({
  location,
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const subCategories = edges.map(edge => edge.node.frontmatter.subCategory)
  const distinctSubCatagories = [...new Set(subCategories)]

  distinctSubCatagories.sort(function(a, b) {
    return a.split('-')[0] - b.split('-')[0]
  })

  console.log(edges)
  var subCategoryCards = []

  for (let i = 0; i < distinctSubCatagories.length; i++) {
    var sources = edges.reduce(function(result, post) {
      if (post.node.frontmatter.subCategory === distinctSubCatagories[i]) {
        result.push(post)
      }
      return result
    }, [])

    console.log(sources)
    sources.sort(function(a, b) {
      return a.node.frontmatter.order - b.node.frontmatter.order
    })

    const posts = sources.map(edge => (
      <PostLink key={edge.node.id} post={edge.node} />
    ))

    subCategoryCards[i] = (
      <SubCard posts={posts} title={distinctSubCatagories[i].substring(2)} />
    )
  }

  return (
    <Layout location={location}>
      <BlueTopSection />
      <TitleMargin>
        <CategoryTitle
          title={'Lets get started'}
          subHeading={
            'Everything you need to know to get your website up and running.'
          }
        >
          <ContactIcon />
        </CategoryTitle>
      </TitleMargin>
      {subCategoryCards}
      <HelpPromptPadding>
        <HelpPrompt />
      </HelpPromptPadding>
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query($path: String!) {
    allMarkdownRemark(filter: { frontmatter: { rootPage: { eq: $path } } }) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            subHeading
            rootPage
            subCategory
            order
          }
        }
      }
    }
  }
`
