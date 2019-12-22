import React from 'react';
import './card.styles.css';

export const Card=({name,id,email})=>{
   
    return(<div className='card-container'>
    <img alt='monster' src={`https://robohash.org/${id}?set=set2&size=180x180`} />
    <h1>{name}</h1>
    <p>{email}</p></div>)
}