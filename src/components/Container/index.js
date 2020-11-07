import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import FooterContact from '../FooterContact'
import styled from 'styled-components'
import ResponsiveAnchor from '../ResponsiveAnchor'
import { useMediaQuery } from 'react-responsive'

const OuterContainerWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`

const AnchorPadding = styled.div`
  padding-top: 120px;
`

const InnerContainerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1024px;

  ${props =>
    props.onPostPage &&
    `display: flex;
    flex-direction: row;`}
`

const Container = props => {
  const [URL, setURL] = useState('')
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })

  useEffect(() => {
    setURL(window.location.href.split('/'))
  }, [setURL])

  return (
    <OuterContainerWrapper>
      <InnerContainerWrapper onPostPage={props.onPostPage}>
        {props.children}
        {!isTabletOrMobile && props.onPostPage && (
          <AnchorPadding>
            <ResponsiveAnchor />
          </AnchorPadding>
        )}
      </InnerContainerWrapper>
      {URL[URL.length - 1] !== 'contact' ? <Footer /> : <FooterContact />}
    </OuterContainerWrapper>
  )
}

export default Container
