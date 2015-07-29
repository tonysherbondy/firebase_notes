import React from 'react';

class MenuBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-xs-7 col-xs-offset-2" style={{marginTop: 15}}>
          <div className="form-group col-xs-offset-5 col-xs-5">
            <button
              onClick={this.handleGoToView.bind(this)}
              className="btn btn-block btn-primary">
                View
            </button>
          </div>
        </div>
      </nav>
    );
  }
  handleGoToView() {
    let {router} = this.context;
    router.transitionTo('notebook_app');
  }
}

export default MenuBar;
