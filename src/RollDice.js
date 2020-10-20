import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
    render(){
        // let myNum = function(){
        //     return Math.floor((Math.random() * 6) + 1);
        // };
        let position = "";
        function toWords() {
            let myNum = Math.floor((Math.random() * 6) + 1);
            if (myNum === 1) {
                position = 'one' 
            }else if(myNum === 2){
                position = 'two'
            }else if(myNum === 3){
                position = 'three'
            }else if(myNum === 4){
                position = 'four'
            }else if(myNum === 5){
                position = 'five'
            }else {
                position = 'six'
            }
        }
        toWords()
        function findNum(){
            toWords();
        }
        return(
            <div>
                <Die num = {position}/>
                <Die num = {position}/>
            </div>
        )
    }
}

export default RollDice;