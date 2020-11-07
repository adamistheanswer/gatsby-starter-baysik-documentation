import React from 'react'
import TableOfContents from '../TableOfContents'
import styled from 'styled-components'

const AnchorOuter = styled.div`
  margin-top: 40px;
  position: -webkit-sticky;
  position: sticky;
`

const AnchorInner = styled.div`
  position: absolute;
  left: 10px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`

const ResponsiveAnchor = () => {
  return (
    <AnchorOuter>
      <AnchorInner>
        <TableOfContents offsetTop={80} affix={true} />
      </AnchorInner>
    </AnchorOuter>
  )
}

export default ResponsiveAnchor
