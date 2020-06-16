import React,{Component} from 'react';
import {Tabs,Tab, Grid, Cell,CardText,CardTitle,Card,CardActions,Button,CardMenu,IconButton} from 'react-mdl';

class project extends Component{

  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
}

togglecatagories(){
  if(this.state.activeTab == 0){
    return(
      <div className="project-grid">

    
      {/* project 1 */}
      <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png) center / cover'}}>React project #1</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>GitHub</Button>
        <Button colored>CodePen</Button>
        <Button colored>LiveDemo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>


 {/* project 2 */}
 <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
 <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png) center / cover'}}>React project #2</CardTitle>
 <CardText>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Mauris sagittis pellentesque lacus eleifend lacinia...
 </CardText>
 <CardActions border>
     <Button colored>GitHub</Button>
     <Button colored>CodePen</Button>
     <Button colored>LiveDemo</Button>
 </CardActions>
 <CardMenu style={{color: '#fff'}}>
     <IconButton name="share" />
 </CardMenu>
</Card>


 {/* project 3 */}
 <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
 <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png) center / cover'}}>React project #3</CardTitle>
 <CardText>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Mauris sagittis pellentesque lacus eleifend lacinia...
 </CardText>
 <CardActions border>
     <Button colored>GitHub</Button>
     <Button colored>CodePen</Button>
     <Button colored>LiveDemo</Button>
 </CardActions>
 <CardMenu style={{color: '#fff'}}>
     <IconButton name="share" />
 </CardMenu>
</Card>
</div>
    )
  }
  else if(this.state.activeTab == 1){
    return(
      <div><h1>This is MongoDB</h1></div>
    )
  }
  else if(this.state.activeTab == 2){
    return(
      <div><h1>This is Angular</h1></div>
    )
  }
  else if(this.state.activeTab == 3){
    return(
      <div><h1>This is VueJs</h1></div>
    )
  }
}
  render(){
    return(
      <div className="catagory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJs</Tab>
                </Tabs>

                <section >
                  <Grid >
                    <Cell col={12}>
                      <div className="content"> {this.togglecatagories()}</div>
                    </Cell>
                  </Grid>
                
                </section>
                </div>
    )

    }
}
export default project;