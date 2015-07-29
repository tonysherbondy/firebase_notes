import React from 'react';
import { RouteHandler } from 'react-router';
import Flux from '../dispatcher/dispatcher';
import NotebookStore from '../stores/NotebookStore';
import NotebookActions from '../actions/NotebookActions';

// TODO Can I get rid of this by knowing more about react-router???
// Simply holds either editor or viewer
class NotebookApp extends React.Component{
  render(){
    let {notebookId} = this.router.getCurrentParams();
    return (
      <RouteHandler {...this.props} notebookId={notebookId} />
    );
  }

  componentWillMount(){
    this.router = this.context.router;
  }
}

NotebookApp.contextTypes = {
  router: React.PropTypes.func.isRequired
};

let stores = [NotebookStore];
NotebookApp = Flux.connect(NotebookApp, stores, () => ({
  notebook: NotebookStore.getNotebook(),
  notebookStatus: NotebookStore.getNotebookStatus()
}));

NotebookApp.willTransitionTo = function(transition, params) {
  NotebookActions.fetchNotebook(params.notebookId);
};


export default NotebookApp;
