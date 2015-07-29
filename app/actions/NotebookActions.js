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
      helpers.getNotebook(notebookId)

        .then(response => {
          let {data} = response;

          // This essentially does notebook creation here
          let notebook = {
            id: notebookId,
            notes: data ? data.notes : []
          };
          NotebookActions.setNotebook(notebook);
        })

        .catch(response => {
          this.dispatch({
            actionType: 'ERROR_LOADING_NOTEBOOK',
            notebookId,
            error: response
          });
        });

    }, 1000);
  }
});

export default NotebookActions;
