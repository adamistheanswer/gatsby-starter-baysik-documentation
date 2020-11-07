import React from 'react'
import styled from 'styled-components'
import H3 from '../Typeography/H3'
import Body1 from '../Typeography/Body1'
import { useMediaQuery } from 'react-responsive'

const CenterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
`

const IconCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background-color: #e9f1f6;
  margin-bottom: 10px;
  margin-top: 15px;
`
const IconCircleWhite = styled(IconCircle)`
  background-color: #fff;
  width: 60px;
  height: 60px;
  margin-right: 20px;
  margin-top: 5px;
`
const TitleOffset = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -50px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    margin-left: 0px;
    justify-content: center;
    align-items: center;
  }
`

const CategoryTitle = ({ title, subHeading, children }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <>
      <CenterWrapper>
        <TitleOffset>
          <IconCircleWhite>{children}</IconCircleWhite>
          <H3
            css={`
              text-align: center;
            `}
          >
            {title}
          </H3>
        </TitleOffset>
        {!isTabletOrMobile && subHeading && (
          <Body1
            css={`
              text-align: center;
            `}
          >
            {subHeading}
          </Body1>
        )}
      </CenterWrapper>
    </>
  )
}

export default CategoryTitle
