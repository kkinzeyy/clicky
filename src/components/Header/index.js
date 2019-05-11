import React from 'react';
import './style.css';
import ScoreDisplay from '../Score';

function Header(props){
    return(
    <header className='header'>
    <h1>Welcome to my clicky game!</h1>
    <h2>Click on a character to add points to your score, click the same one more than once and GAME OVER!</h2>
    <h3>Goodluck!</h3>
    <h4> <ScoreDisplay score={props.score} hiScore={props.hiScore} /></h4>
    <hr></hr>

    {/* Display Scores Below */}
    <h2> Score : {props.score}  |||  Top Score: {props.hiScore} </h2>
    </header>
    
    );
}

export default Header;