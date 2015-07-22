import React from 'react';
import { RouteHandler } from 'react-router';
import SearchNotebook from './SearchNotebook';

class Main extends React.Component{
  render(){
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-xs-7 col-xs-offset-2" style={{marginTop: 15}}>
            <SearchNotebook />
          </div>
        </nav>
        <div className="container">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    );
  }
}

export default Main;
