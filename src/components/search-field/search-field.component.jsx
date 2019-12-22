import React from 'react';
import './search-box.styles.css';
export const SearchField=({onSearchChange,placeholder})=>{
    return(
        <input className='search' type='search' onChange={onSearchChange} placeholder={placeholder} />
    )
}