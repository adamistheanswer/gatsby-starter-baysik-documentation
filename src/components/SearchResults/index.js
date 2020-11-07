import React from 'react'
import { Link } from 'gatsby'
import H5 from '../Typeography/H5'
import styled from 'styled-components'

const TitleFont = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: normal;
  color: #2875aa;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-top: 20px;
`

const CatagoryFont = styled.div`
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #848484;
  padding-left: 20px;
  padding-bottom: 20px;
`

const DescriptionFont = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: normal;
  color: #4a4a4a;
  padding-bottom: 10px;
  padding-left: 20px;
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr;
  width: 100%;
  margin-top: 40px;
  border-radius: 4px;

  box-shadow: 0 0 4px -1px rgba(0, 0, 0, 0.2), 0 0 10px 0 rgba(0, 0, 0, 0.12),
    0 0 5px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
`

const ResultContainer = styled.div`
  background-color: ${props => (!props.isOdd ? '#e9f1f6' : '#fff')};
  border-top-right-radius: ${props => (!props.first ? '0px' : '4px')};
  border-top-left-radius: ${props => (!props.first ? '0px' : '4px')};
  border-bottom-right-radius: ${props => (!props.last ? '0px' : '4px')};
  border-bottom-left-radius: ${props => (!props.last ? '0px' : '4px')};
`

const RootPageToCatagory = item => {
  let kebabCaseToSpaces = item.replace(/-/g, ' ')
  let removeFirstSlash = kebabCaseToSpaces.substring(
    1,
    kebabCaseToSpaces.length
  )
  return removeFirstSlash.toUpperCase()
}

const SearchResults = ({ query, results }) => {
  return (
    <div
      css={`
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 40px;
      `}
    >
      <H5
        css={`
          padding-top: 40px;
          text-align: center;
        `}
        aria-live="assertive"
      >
        {results.length} results found for "{query}"
      </H5>

      {!!results.length && (
        <SearchContainer>
          {results.map(({ title, url, subHeading, rootPage }, index) => (
            <Link to={url}>
              <ResultContainer
                isOdd={index % 2 === 0}
                first={index === 0}
                last={index === results.length - 1}
                key={title}
              >
                <TitleFont>
                  <a href={url}>{title}</a>
                </TitleFont>
                {subHeading && <DescriptionFont>{subHeading}</DescriptionFont>}
                {rootPage && (
                  <CatagoryFont>{RootPageToCatagory(rootPage)}</CatagoryFont>
                )}
              </ResultContainer>
            </Link>
          ))}
        </SearchContainer>
      )}
    </div>
  )
}

export default SearchResults
