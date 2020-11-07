import React from 'react'
import styled from 'styled-components'
import H6 from '../Typeography/H6'
import { HelpIcon } from '../Icons'

const HelpIconWrapper = styled.div`
  padding-right: 10px;
  padding-top: 4px;
`

const HelpRowWraper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
`

const CenterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  padding-right: 40px;
  padding-left: 40px;
`

const HelpPrompt = () => {
  return (
    <CenterWrapper>
      <HelpRowWraper>
        <HelpIconWrapper>
          <HelpIcon />
        </HelpIconWrapper>
        <H6>Can’t find what you are looking for?</H6>
      </HelpRowWraper>
    </CenterWrapper>
  )
}

export default HelpPrompt
