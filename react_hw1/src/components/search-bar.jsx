import React from 'react';

const SearchBar = ({value, onChange}) => (
  <div>
<h2>Serch by content</h2>
    <input 
    type="text" 
    value={value} 
    onChange={onChange}/>
  </div>
)

export default SearchBar;