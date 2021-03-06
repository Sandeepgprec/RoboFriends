import React from 'react';
import Card from './Card';

const Cardlist=({robots})=>{
    const cardArray=robots.map((user,i)=>{
        return <Card 
        key={robots[i].id} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email} 
        username={robots[i].username}
        />
    })
    return(
        <div>
         {cardArray}
        </div>
    );
}
export default Cardlist;