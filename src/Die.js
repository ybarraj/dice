import React, { Component } from 'react';
import './Die.css';


class Die extends Component{
    render(){
        let clnm = `fas fa-dice-${ this.props.face }`
        return(
            <div className='Die'>
                <i className = {clnm} ></i>
            </div>
            
        )
    }
}

export default Die;