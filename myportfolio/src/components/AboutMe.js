import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class AboutMe extends Component{
  render(){
    return(
        <div className="aboutme" >
          <h1 style = {{ paddingLeft: "2.2em" }}> AboutMe</h1> 
            
           <Grid >
             <Cell col={6}>
              <p> <h4 style={{paddingTop:'0em'}}> I'm a UI designer and Front End</h4> </p> 
              <p> <h4> Developer from Gujarat, India </h4> </p>
 
              <p> I enjoy taking complex problem and turning them into simple </p>
              <p> and beautiful interface designs.I also love the logic and </p>
              <p> stucture of coding and always strive to write elegant and </p>
              <p> effective code.Whether it be HTML, CSS or JQuery. </p> 
              <p> When I am not coding or pushing Pixels. You'll find me in the </p> 
              <p> Gym or on the court shooting some hoops. </p>
             </Cell>

             <Cell col={6}>
              <img src = "C:\Users\DELL\Desktop\Rect learn\myportfolio\src\components\img\avatar2.png"
              alt = ""  height= '500px'
              width= '500px'
              
              />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
             </Cell>
           </Grid>
           &nbsp; &nbsp; 
           <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" height= '200px'
              width= '320px'
              
              />&nbsp; &nbsp; 
           <img src="https://images.unsplash.com/photo-1514428631868-a400b561ff44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" height= '200px'
               width= '320px' 
          
              />&nbsp; &nbsp; 
           <img src="https://images.unsplash.com/photo-1584997629379-c93406839511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=709&q=80" alt="" height= '200px'
               width= '320px'
              
              />&nbsp; &nbsp; 
           <img src="https://images.unsplash.com/photo-1553524913-efba3f0b533e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" height= '200px'
               width= '320px'
              
              />&nbsp; &nbsp; 

        </div>
    )
  }
}

export default AboutMe;
 
 
            
 
 

 
 




            
