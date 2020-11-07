import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import H6 from '../Typeography/H6'
import Body2 from '../Typeography/Body2'

const CategoryCardWrapper = styled.div`
  display: flex;

  height: 250px;
  border-radius: 4px;
  box-shadow: 0 0 4px -1px rgba(0, 0, 0, 0.2), 0 0 10px 0 rgba(0, 0, 0, 0.12),
    0 0 5px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const CardDescription = styled.div`
  padding-top: 10px;
  width: 245px;
  text-align: center;
`

const CategoryCard = ({ link, title, description, children }) => {
  return (
    <Link to={link}>
      <CategoryCardWrapper>
        <ColumnWrapper>
          <IconCircle>{children}</IconCircle>
          <H6>{title}</H6>
          <CardDescription>
            <Body2>{description}</Body2>
          </CardDescription>
        </ColumnWrapper>
      </CategoryCardWrapper>
    </Link>
  )
}

export default CategoryCard
