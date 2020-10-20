import React, { Component } from 'react';



class Die extends Component{
    render(){
        let clnm = `fas fa-dice-${ this.props.num }`
        return(
            <div>
                <i className = {clnm} ></i>
            </div>
            
        )
    }
}

export default Die;