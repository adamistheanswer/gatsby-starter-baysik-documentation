import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import TextField from '../TextField'

const SearchBoxWrapper = styled.div`
  width: 640px;
  height: 100px;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 15px;
  border-radius: 4px;
  box-shadow: 0 0 4px -1px rgba(0, 0, 0, 0.2), 0 0 10px 0 rgba(0, 0, 0, 0.12),
    0 0 5px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    width: 85vw;
  }
`

const SearchForm = ({ query }) => (
  <div
    css={`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 20px;
    `}
  >
    <SearchBoxWrapper>
      <TextField
        search={true}
        type="search"
        id="search-input"
        name="keywords"
        aria-controls="search-results-count"
        handleChange={value =>
          navigate(`/search?keywords=${encodeURIComponent(value)}`)
        }
        value={query}
      />
    </SearchBoxWrapper>
  </div>
)

export default SearchForm
