import React from 'react';
import NotebookLoadingStatus from './NotebookLoadingStatus';

class NotebookEditor extends React.Component {

  render() {
    if (!this.props.notebook) {
      return (
        <NotebookLoadingStatus {...this.props} />
      );
    }

    return (
      <div>
        Show editor for notebook ({this.props.notebookId})
      </div>
    );
  }

}

export default NotebookEditor;
