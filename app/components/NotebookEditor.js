import React from 'react';
import NotebookLoadingStatus from './NotebookLoadingStatus';
import MenuBar from './MenuBar';

class NotebookEditor extends React.Component {

  render() {
    if (!this.props.notebook) {
      return (
        <NotebookLoadingStatus {...this.props} />
      );
    }

    return (
      <div className="main-container">
        <MenuBar />
        <div className="container">
          Show editor for notebook ({this.props.notebookId})
        </div>
      </div>
    );
  }

}

export default NotebookEditor;
