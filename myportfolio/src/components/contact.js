import React,{Component} from 'react';
import { Grid, Cell,List,ListItem,ListItemContent } from 'react-mdl';

class contact extends Component{
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Raj Nada</h2>
            <img
            src="https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"
            alt="avtar"
            style={{height:'320px'}}
            />
            <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Hello I am graduate from parul university in computer science and engineering.I am full stack devloper.I have many skills to become renowned software devloper.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className='contact-list'>
            <List>
             <ListItem>
               <ListItemContent style={{fontSize:'30px',fontFamily:'Anton',paddingLeft:'3em'}}>
                 <i className="fa fa-phone-square" aria-hidden="true"/>
                 (123)456-7890 
               </ListItemContent>
              </ListItem>
             
              <ListItem>
               <ListItemContent style={{fontSize:'30px',fontFamily:'Anton',paddingLeft:'3em'}}>
                 <i className="fa fa-skype" aria-hidden="true"/>
                 rajnada1915 
               </ListItemContent>
              </ListItem>

              <ListItem>
               <ListItemContent style={{fontSize:'30px',fontFamily:'Anton',paddingLeft:'3em'}}>
                 <i className="fa fa-envelope" aria-hidden="true"/>
                 rajnada1434@gmail.com 
               </ListItemContent>
              </ListItem>
            </List>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }

}
export default contact;