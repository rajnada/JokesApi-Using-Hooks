import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component{
  render(){
    return(
      <div>
      <Grid>
        <Cell col={3}><h5 style={{marginTop :'0px'}}>{this.props.startYear}-{this.props.endYear}</h5></Cell>
        <Cell col={3}><h5 style={{marginTop :'0px'}}>{this.props.Board}</h5></Cell>
        <Cell col={3}><h5 style={{marginTop :'0px'}}>{this.props.Percentage}</h5></Cell>
        <Cell col={3}><h5 style={{marginTop :'0px'}}>{this.props.schoolName}</h5></Cell>
       
    </Grid>


</div>
      
   
    )
  }
}
export default Education;



