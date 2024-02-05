import React from 'react'

function Search() {
  return (
    <div id='search'>
      <div className='search__inner'>
        <label>
          <span className='ir'>검색</span>
        </label>
        <input
          type='search'
          id='searchInput'
          placeholder='검색어'
          autoComplete='off'
          className='search__input'
        />
      </div>
    </div>
  )
}

export default Search