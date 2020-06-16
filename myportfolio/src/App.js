import React from 'react';
import './App.css';
import {Header,Layout,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main'; 
import {Link} from 'react-router-dom'
import { Router } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color"  title={<Link style={{textDecoration:'none',color:'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/project">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/AboutMe">About Me</Link>
                
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none',color:'Black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
            <Link to="/project">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/AboutMe">About Me</Link>
                
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
