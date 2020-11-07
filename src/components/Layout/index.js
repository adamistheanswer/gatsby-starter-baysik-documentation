import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import AppBar from '../AppBar'
import Container from '../Container'

import MediaQuery from 'react-responsive'

const AppBarWrapper = styled.header`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  z-index: 100;
`

const Layout = ({ children, location, onPostPage }) => {
  return (
    <StaticQuery
      query={graphql`
        query helmetSEO {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        return (
          <MediaQuery maxWidth={1000}>
            {() => (
              <>
                <Helmet
                  title={data.site.siteMetadata.title}
                  meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                  ]}
                >
                  <html lang="en" />
                </Helmet>
                <>
                  <AppBarWrapper>
                    <AppBar
                      location={location}
                      siteTitle={data.site.siteMetadata.title}
                    />
                  </AppBarWrapper>
                  {onPostPage ? (
                    <>
                      <Container onPostPage={onPostPage}>{children}</Container>
                      <div class="sticky" />
                    </>
                  ) : (
                    <Container>{children}</Container>
                  )}
                </>
              </>
            )}
          </MediaQuery>
        )
      }}
    />
  )
}

export default Layout
