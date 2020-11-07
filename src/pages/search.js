import React, { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import Layout from '../components/Layout'
import styled from 'styled-components'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'

const BlueTopSection = styled.div`
  width: 100%;
  height: 480px;
  background: #e9f1f6;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  margin-top: -20px;
`

const Search = ({ location }) => {
  const [results, setResults] = useState([])
  const searchQuery = new URLSearchParams(location.search).get('keywords') || ''

  useEffect(() => {
    if (searchQuery && window.__LUNR__) {
      const debouncedSearch = debounce(async () => {
        const lunr = await window.__LUNR__.__loaded
        const refs = lunr.en.index.search(searchQuery)
        const posts = refs.map(({ ref }) => lunr.en.store[ref])
        setResults(posts)
      }, 50)
      debouncedSearch()
    }

    if (!searchQuery) setResults([])
  }, [location.search, searchQuery])

  return (
    <Layout location={location}>
      <BlueTopSection />
      <SearchForm query={searchQuery} />
      <SearchResults query={searchQuery} results={results} />
    </Layout>
  )
}

export default Search
