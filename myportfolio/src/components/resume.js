import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skill from './skill';
import Projects from './projects';

class Resume extends Component{
  render(){
    return(
      <div>
      <Grid>
        <Cell col={4}>
          <div style={{textAlign:"center"}}>
            <img
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/104748640/original/a2d4aab7567211d74a734615538b2989c78f9366/design-avatar-portrait-cartoon.png"
            alt="avatar"
            style={{height:'200px'}}/>

          </div>
          <h2 style={{paddingTop:'1em',fontWeight:'bold',textAlign:'center'}}>Raj Nada</h2>
          <h4 style={{color:'grey'}}Programmer></h4>
          <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>

          <p>This is my resume.To secure a position in a progressive organization where I can enhance and utilize my technical and managerial skills for the development of organization and society at large.</p>
          <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
          <h5>Address</h5>
          <p>B-30, Panchdev society, Near shirdidham society, Hirabaug,Varachha Road, Surat-395006.</p>
          <h5>Phone</h5>
          <p>+91 799 097-8122</p>
          <h5>Email</h5>
          <p>rajnada1434@gmail.com</p>
          <h5>My Website</h5>
          <p><a href="rajnada14.com">rajnada14.com</a></p>
          <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h4>Education</h4>
          <Education 
          startYear={2012}
          endYear={2013}
          Board="G.S.E.B"
          Percentage='86%'
          schoolName="P.P.S.V"/>

        <Education 
          startYear={2014}
          endYear={2015}
          Board="G.S.H.E.B"
          Percentage='80%'
          schoolName="P.P.S.V"/>


        <Education 
          startYear={2015}
          endYear={2019}
          Board="PU"
          Percentage='8 CGPA'
          schoolName="Parul University"/>
          
         
          

      <hr style={{borderTop:'3px solid #e22947'}}/> 
     
      
        <h4>Skills</h4>
        
          <Skill
            skills="C,C++,Java,Android Studio,SQL,React"/>

      <hr style={{borderTop:'3px solid #e22947'}}/> 

      <h4>Projects</h4>
      <Projects 
          projects="Play, Your Way!"/>

           <Projects projects1= "TECHNOLOGY: android   
           ROLE Contribution in development
            The gist of my application is to provide a means for people to rendezvous at a ground and simply play. App also includes features like local tournaments, state level tournaments, chatting, navigation etc. the possibilities are  limitless. "/>

            <Projects
                projects="Event Management"/>

                <Projects projects1="There are numerous problems faced by students and organizers for managing an event like collection for fee, advertisement, registering for event, etc. These issues can be resolved if the actions are performed online."/>
       
      </Cell>
      
      </Grid>

     
     
      

      
      


  </div>
    )
  }

}
export default Resume;