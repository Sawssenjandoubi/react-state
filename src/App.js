import React, { Component,setState } from 'react'

import { Card, Button } from "react-bootstrap";
import Content from './content';

export default class App extends Component {
  
  styles ={
    display : "flex",
    flexDirection :"column",
    justifyConetent:"center",
    alignItems :"center",
    width:"50%",
    padding : "0 50px",
    border:"1px solid black",
    borderRadius :"10px",
    margin :"50px"

  }

constructor(props) {
  super(props);
  this.state = {
      hide: false,
  };
  this.handleClick = () => {
      this.setState({ hide: !this.state.hide });
  };
}
  render() {
         
    if (this.state.hide) {
    return (
            <div style={this.styles}>
               <Content/>
            <Button variant="primary" onClick={this.handleClick}>
            hide content
                    </Button>
                   
                    
           
            
            </div>
           );
         }

         else {
          return (
              <div>
                <h1>content was hidden</h1>
                  <Button variant="primary" onClick={this.handleClick}>
                  show content
                  </Button>
                  
              </div>
          );
      }
  }
  componentDidMount() {
    /*console.log("component did mount");*/
    alert("component did mount");
}

}


