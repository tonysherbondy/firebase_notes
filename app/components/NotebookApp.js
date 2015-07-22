import React from 'react';
import Flux from '../dispatcher/dispatcher';
import NotebookStore from '../stores/NotebookStore';
import NotebookActions from '../actions/NotebookActions';

class NotebookApp extends React.Component {

  render() {
    let {notebookId} = this.router.getCurrentParams();

    console.log('status', this.props.notebookStatus);
    if (!this.props.notebook) {
      let {notebookStatus} = this.props;
      let message;
      if (notebookStatus === 'loading') {
        message = `Loading ${notebookId} notebook...`;
      } else {
        message = `Problem with ${notebookId} notebook`;
      }

      return (
        <div>{message}</div>
      );
    }

    return (
      <div>
        Show notebook ({notebookId})
      </div>
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
