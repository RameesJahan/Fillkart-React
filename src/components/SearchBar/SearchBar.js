import React,{useState} from 'react';
import './SearchBar.css'

function SearchBar() {
  const [search, setSearch] = useState('');
  
  return (
    <div className="search-box">
      <input className="ipt-search" type="search" value={search} placeholder="Search For Products..." onChange={(e)=>setSearch(e.target.value)} />
      <button className="btn-search">Search</button>
    </div>
  )
}

export default SearchBar;