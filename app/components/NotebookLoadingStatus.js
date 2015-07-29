import React from 'react';

class NotebookLoadingStatus extends React.Component {
  render() {
    let message = ({notebookStatus, notebookId}) => {
      if (notebookStatus === 'loading') {
        return `Loading ${notebookId} notebook...`;
      } else {
        return `Problem with ${notebookId} notebook`;
      }
    };

    return (
      <div>{message(this.props)}</div>
    );
  }
}

NotebookLoadingStatus.propTypes = {
  notebookId: React.PropTypes.string.isRequired
};

export default NotebookLoadingStatus;
