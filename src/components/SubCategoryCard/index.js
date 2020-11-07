import React from 'react'
import styled from 'styled-components'
import H6 from '../Typeography/H6'
import { useMediaQuery } from 'react-responsive'

const SubCategoryTitleAlign = styled.div``

const SubCategoryTitle = styled(H6)`
  padding-top: 40px;
  padding-bottom: 20px;
  text-align: left;
  margin-right: 20px;
  margin-left: 20px;
`

const SubCategoryCardOuter = styled.div`
  border-radius: 4px;
  box-shadow: 0 0 4px -1px rgba(0, 0, 0, 0.2), 0 0 10px 0 rgba(0, 0, 0, 0.12),
    0 0 5px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  margin-right: 20px;
  margin-left: 20px;
`

const SubCategoryCardInner = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
`

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  color: #444;
  margin: auto;

  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

const VerticalDivider = styled.div`
  width: 2px;
  height: ${props => props.count}px;
  border-radius: 1px;
  background-color: #dddddd;
  position: absolute;
  left: 50%;
`

const DividerHeight = array => {
  return (
    Math.round(array.length / 2) * 32 + 20 * (Math.round(array.length / 2) - 1)
  )
}

const SubCategoryCard = ({ posts, title }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <>
      <SubCategoryTitleAlign>
        <SubCategoryTitle>{title}</SubCategoryTitle>
      </SubCategoryTitleAlign>
      <SubCategoryCardOuter>
        <SubCategoryCardInner>
          {!isTabletOrMobile && (
            <VerticalDivider count={DividerHeight(posts)} />
          )}
          <CategoryGrid>{posts}</CategoryGrid>
        </SubCategoryCardInner>
      </SubCategoryCardOuter>
    </>
  )
}

export default SubCategoryCard
