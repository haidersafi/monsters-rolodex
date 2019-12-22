import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = ({monster}) => {
    console.log(monster)
    return(<div className='card-list'>{monster.map(monst=><Card key={monst.id} name={monst.name} id={monst.id} email={monst.email} />)}</div>)
}