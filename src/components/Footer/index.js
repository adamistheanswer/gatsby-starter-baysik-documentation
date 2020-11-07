import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Body1 from '../Typeography/Body1'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

const FooterWrapper = styled.div`
  height: 255px;
  background-color: #f3f3f3;
`

const FooterWrapperVertical = styled.div`
  background-color: #f3f3f3;
`

const ButtonWrapper = styled.div`
  padding-top: 10px;
`

const InnerFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`

const FooterColumns = styled.div`
  display: flex;
  height: 255px;
  flex-direction: column;
  justify-content: center;
  max-width: 350px;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 767px) {
    height: 200px;
  }
`

const VerticalDivider = styled.div`
  width: 2px;
  height: 156px;
  border-radius: 1px;
  background-color: #dddddd;
  margin-left: 75px;
  margin-right: 75px;
`

const HorizonatalDivider = styled.div`
  width: 156px;
  height: 2px;
  border-radius: 1px;
  background-color: #dddddd;
  margin-left: 75px;
  margin-right: 75px;
`

const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const buttonTheme = { main: '#2875aa', fontColor: '#2875aa' }
  return (
    <>
      {isTabletOrMobile ? (
        <FooterWrapperVertical>
          <InnerFooterWrapper>
            <FooterColumns>
              <Body1
                css={`
                  padding-right: 20px;
                  padding-left: 20px;
                `}
              >
                Send us a message and we will get back to you as quickly as
                possible.
              </Body1>
              <Link to="/contact-us">
                <ButtonWrapper>
                  <Button outline theme={buttonTheme}>
                    Contact us
                  </Button>
                </ButtonWrapper>
              </Link>
            </FooterColumns>
            <HorizonatalDivider />
            <FooterColumns>
              <Body1
                css={`
                  padding-right: 20px;
                  padding-left: 20px;
                `}
              >
                Have a suggestion or simply need some advice? Ask our community.
              </Body1>
              <Link to="/community">
                <ButtonWrapper>
                  <Button outline theme={buttonTheme}>
                    Ask the community
                  </Button>
                </ButtonWrapper>
              </Link>
            </FooterColumns>
          </InnerFooterWrapper>
        </FooterWrapperVertical>
      ) : (
        <FooterWrapper>
          <InnerFooterWrapper>
            <FooterColumns
              css={`
                padding-left: 40px;
              `}
            >
              <Body1>
                Send us a message and we will get back to you as quickly as
                possible.
              </Body1>
              <Link to="/contact-us">
                <ButtonWrapper>
                  <Button outline theme={buttonTheme}>
                    Contact us
                  </Button>
                </ButtonWrapper>
              </Link>
            </FooterColumns>
            <VerticalDivider />
            <FooterColumns
              css={`
                padding-right: 40px;
              `}
            >
              <Body1>
                Have a suggestion or simply need some advice? Ask our community.
              </Body1>
              <Link to="/community">
                <ButtonWrapper>
                  <Button outline theme={buttonTheme}>
                    Ask the community
                  </Button>
                </ButtonWrapper>
              </Link>
            </FooterColumns>
          </InnerFooterWrapper>
        </FooterWrapper>
      )}
    </>
  )
}

export default Footer
