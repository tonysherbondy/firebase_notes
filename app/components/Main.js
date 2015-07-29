import React from 'react';
import { RouteHandler } from 'react-router';

class Main extends React.Component{
  render(){
    return (
      <RouteHandler {...this.props}/>
    );
  }
}

export default Main;
