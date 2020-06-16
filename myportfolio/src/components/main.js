import React from 'react';
import {Switch} from 'react-router-dom';
import LandingPage from './landingpage';
import Resume from './resume';
import AboutMe from './AboutMe';
import Contact from './contact';
import Project from './project';
import { Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route  path="/AboutMe" component={AboutMe}/>
    <Route  path="/contact" component={Contact}/>
    <Route  path="/project" component={Project}/>
    <Route  path="/resume" component={Resume}/>
  </Switch>
)

export default Main;