import React from 'react';
import { RouteHandler } from 'react-router';
import MenuBar from './MenuBar';

class Main extends React.Component{
  render(){
    return (
      <div className="main-container">
        <MenuBar />
        <div className="container">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    );
  }
}

export default Main;
