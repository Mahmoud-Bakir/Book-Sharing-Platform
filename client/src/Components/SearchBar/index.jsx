import React from 'react'
import { useState } from 'react'
import SearchPartition from '../PartitionS'

const SearchBar = ({onSearch}) => {


  const [search_text, setSearchText] = useState('')
  const handleSearchChange = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    onSearch(newSearchText); 
  }
  return (
    <SearchPartition 
     Name={"search"}
     Itype={"text"}
     holder={"Search for recipes by book's name,author,or description"}
     value={search_text}
     onChange={handleSearchChange}
    />
  )
}

export default SearchBar