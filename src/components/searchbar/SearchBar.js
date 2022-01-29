import React, { useState } from 'react';
import './SearchBar.module.css';

function SearchBar() {
  const [value, setValue] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="Enter The Search Item"
        type={'text'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
