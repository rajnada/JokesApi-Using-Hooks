import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class landing extends Component{
  render(){
    return(
    
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                src="https://umzug-ubl.ch/en/images/clients/38.jpg"
                alt="avtar"
                className="avtar-img"
              />
              <div className="banner-text">
                <h1>Full Stack Devloper</h1>
                
                <hr/>

                <p>HTML/CSS | MONGODB | JAVASCRIPT | REACT |REACTNATIVE | NODEJS</p>

              </div>
            </Cell>
      
          </Grid>
        </div>
     
    )
  }

}
export default landing;