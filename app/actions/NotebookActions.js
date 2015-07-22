import biff from '../dispatcher/dispatcher';
import helpers from '../utils/helpers';

const NotebookActions = biff.createActions({
  setNotebook(notebook) {
    this.dispatch({
      actionType: 'SET_NOTEBOOK',
      notebook
    });
  },

  fetchNotebook(notebookId) {
    this.dispatch({
      actionType: 'LOADING_NOTEBOOK',
      notebookId
    });
    // Approximate slow server
    setTimeout( () => {
      helpers.getNotebook(notebookId, dataObj => {
        let notebook = dataObj.val();
        if (notebook) {
          NotebookActions.setNotebook(notebook);
        } else {
          // TODO - this should instead be a create notebook instruction
          this.dispatch({
            actionType: 'ERROR_LOADING_NOTEBOOK',
            notebookId
          });
        }
      });
    }, 1000);
  }
});

export default NotebookActions;
