import React, { Component,setState } from 'react'
import myimg from './assets/profil.jpg';
export default class Content extends Component {
    state={
        fullname:"Jandoubi Sawssen",
        bio:"Full Stack JS",
        imgSrc : myimg,
        profession:"Web Developer",
       
    
      }
  render() {
    return (
      <div>
        <img src={this.state.imgSrc} alt=""/>
            <h3>{this.state.fullname}</h3> 
            <h4>{this.state.bio}</h4>
            <h5>{this.state.profession}</h5>
            
            
            
      </div>
    )
  }
}
