// Q3: Tasks Component (there are 8 mistakes)

import React, { Component } from 'react';
// WRITE || EDIT THE CODE UNDER THIS LINE*
import Item from './Item';

// WRITE || EDIT THE CODE UNDER THIS LINE*
export default class Tasks extends Component {
  state = {
    day: "Sat"
  };
  changeDay() {
    // WRITE || EDIT THE CODE UNDER THIS LINE
    
    // day = 'Sun'

    let newDay = this.state.day 
      return newDay = 'Sun'
      this.setState(day)
  }
  render() {
    return (
      <div>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE **/}
        <h1>Tasks Component: {this.state.day}</h1>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE **/}
        <button onClick={this.changeDay}>Change Tasks State</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE*/}
        <button onClick={changeTitleFromChild}>Change App State</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE *2 **/}

        {
          todos.props.map((elem,i)=>{
            return <Item e={elem} changeTitleFromChild={this.props.changeTitle}/>
          })
        }
        
      </div>
    );
  }
}
