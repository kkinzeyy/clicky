import React from 'react';
import './style.css';

class NavMessage extends Component{
    state={
        message: '',
        animating: false
    };

    componentDidUpdate({score, hiScore}, prevState){
        const newState={animating:true};

        if(score=== 0 && hiScore=== 0){
            newState.message=" ";}
        else if(score=== 0 && hiScore> 0){
            newState.message='wrong';}
        else {newState.message='correct';}
        if(score !== this.props.score || this.state.message !== newState.message){
            this.setState(newState);
        }
    }

    renderMessage=()=>{
        switch(this.state.message){
            case 'correct': return '\nAwesome!';
            case 'wrong': return '\nSorry Try again!';
            default: return 'Click on a Tile to start!';
        }
    };

    render(){
        return(
            <li className={this.state.animating ? this.state.message: ''}
            onAnimationEnd={()=> this.setState({animating: false})}>
            {this.renderMessage}</li>);
    }
}


export default NavMessage;