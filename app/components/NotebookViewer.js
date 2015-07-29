import React from 'react';
import NotebookLoadingStatus from './NotebookLoadingStatus';

class NotebookViewer extends React.Component {

  render() {
    if (!this.props.notebook) {
      return (
        <NotebookLoadingStatus {...this.props} />
      );
    }

    return (
      <div>
        Viewing notebook ({this.props.notebookId})
      </div>
    );
  }

}

export default NotebookViewer;
