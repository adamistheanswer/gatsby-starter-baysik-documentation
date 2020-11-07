import React from 'react'
import { Link } from 'gatsby'
import Body1 from '../Typeography/Body1'
import styled from 'styled-components'

const PostLinkText = styled(Body1)`
  color: #2875aa;
  margin: 0;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
const PostLink = ({ post }) => (
  <Link to={post.fields.slug}>
    <PostLinkText>{post.frontmatter.title}</PostLinkText>
  </Link>
)

export default PostLink
