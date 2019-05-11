import React from 'react';
import './style.css';

function ClickItem(props){
    return(
    <div 
    role='img'
    aria-label='click item'
    onClick={()=> props.handleClick(props.id)}
    style={{backgroundImage: `url('${props.image}')`}}
    className={`clicky${props.shake? '':''}`}>
    
    </div>
    );
}

export default ClickItem;