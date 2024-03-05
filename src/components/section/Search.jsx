import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch =()=>{
    if(searchKeyword){
      navigate(`/search/${searchKeyword}`);
      setSearchKeyword('');
    }
  }
  return (
    <div id='search'>
      <div className='search__inner'>
        <label>
					<IoSearchOutline />
          <span className='ir'>검색</span>
        </label>
        <input
          type='search'
          id='searchInput'
          placeholder='검색'
          autoComplete='off'
          className='search__input'
          value={searchKeyword}
          onChange={e=>setSearchKeyword(e.target.value)}
          onKeyDown={e=>{
              if(e.key === 'Enter'){
                handleSearch();
              }
            }
          }
        />
      </div>
    </div>
  )
}

export default Search