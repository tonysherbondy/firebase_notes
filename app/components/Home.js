import React from 'react';

class Home extends React.Component{
  render(){
    return (
      <div>
        <h2 className="text-center">
          Enter notebook ID above.
        </h2>
        <h4 className="text-center">
          This page should not exist and just send you to a brand new notebook.
        </h4>
      </div>
    );
  }

  static willTransitionTo(transition, params, query) {
    console.log('transition to home with', transition, params, query);
  }
}

export default Home;
