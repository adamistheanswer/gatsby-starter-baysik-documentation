import React, { useState } from 'react'
import styled from 'styled-components'
import TextField from '../TextField'
import { navigate } from 'gatsby'

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

const SubmitButton = styled.div`
  visibility: hidden;
`

const SearchFormBasic = () => {
  const handleSubmit = event => {
    event.preventDefault()
    navigate(`/search?keywords=${encodeURIComponent(searchTerm)}`)
  }

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <SearchBoxWrapper>
      <form onSubmit={handleSubmit} role="search">
        <TextField
          search={true}
          type="search"
          id="search-input"
          name="keywords"
          aria-controls="search-results-count"
          handleChange={value => {
            setSearchTerm(value)
          }}
          value={searchTerm}
        />
        <SubmitButton type="button" />
      </form>
    </SearchBoxWrapper>
  )
}

export default SearchFormBasic
