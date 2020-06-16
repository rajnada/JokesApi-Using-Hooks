import React, {Component} from 'react';


class Projects extends Component{
  render(){
    return(
      <div>
      <p> <h5 style={{marginTop :'0px'}}>{this.props.projects}</h5></p> 
      <p> <h6 style={{marginTop :'0px'}}>{this.props.projects1}</h6></p> 
      
    </div>
      
   
    )
  }
}
export default Projects;