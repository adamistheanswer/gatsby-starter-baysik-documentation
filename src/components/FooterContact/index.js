import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Body1 from '../Typeography/Body1'
import H6 from '../Typeography/H6'
import { TelephoneIcon } from '../Icons'

import { Link } from 'gatsby'

const FooterContactTop = styled.div`
  height: 255px;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
  margin: 0;
`
const FooterContactBottom = styled(FooterContactTop)`
  background-color: #fff;
`

const ButtonWrapper = styled.div`
  padding-top: 10px;
`

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const FooterContactColumn = styled.div`
  display: flex;
  height: 255px;
  flex-direction: column;
  justify-content: center;
  max-width: 520px;
  align-items: center;
  text-align: center;
`

const TelephoneIconPadding = styled.div`
  padding-top: 4px;
  padding-right: 10px;
`

const FooterContact = () => {
  return (
    <>
      <FooterContactTop>
        <FooterContactColumn>
          <H6
            css={`
              padding-bottom: 20px;
            `}
          >
            Have a suggestion or need some advice?
          </H6>
          <Body1>
            Our community is the perfect place to talk with other like minded
            people.
          </Body1>
          <Link to="/community">
            <ButtonWrapper>
              <Button outline theme={{ main: '#2875aa', fontColor: '#2875aa' }}>
                Ask the community
              </Button>
            </ButtonWrapper>
          </Link>
        </FooterContactColumn>
      </FooterContactTop>
      <FooterContactBottom>
        <FooterContactColumn>
          <Body1>You can also contact us via telephone:</Body1>
          <RowWrapper>
            <TelephoneIconPadding>
              <TelephoneIcon />
            </TelephoneIconPadding>
            <Body1>020 3886 0697</Body1>
          </RowWrapper>
          <Body1>Opening hours:</Body1>
          <Body1>Monday - Friday 11am - 6pm</Body1>
        </FooterContactColumn>
      </FooterContactBottom>
    </>
  )
}

export default FooterContact
