import React from 'react';

export default class SearchNotebook extends React.Component {
  handleSubmit(){
    let router = this.context.router;
    let notebookId = this.refs.notebookId.getDOMNode().value;
    this.refs.notebookId.getDOMNode().value = '';
    router.transitionTo('notebook_app', {notebookId});
  }

  render(){
    return (
      <div className="col-xs-12">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group col-xs-7">
            <input type="text" className="form-control" ref="notebookId" />
          </div>
          <div className="form-group col-xs-5">
            <button type="submit" className="btn btn-block btn-primary">Search Notebooks</button>
          </div>
        </form>
      </div>
    );
  }
}

SearchNotebook.contextTypes = {
  router: React.PropTypes.func.isRequired
};
