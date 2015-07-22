import biff from '../dispatcher/dispatcher';
import helpers from '../utils/helpers';
import Immutable from 'immutable';

const NoteActions = biff.createActions({
  setNotes(notes) {
    this.dispatch({
      actionType: 'SET_NOTES',
      notes
    });
  },

  fetchNotes(username) {
    helpers.getNotesForUser(username, dataObj => {
      console.log('fetch for', username);
      let notes = Immutable.List(dataObj.val() || []);
      NoteActions.setNotes(notes);
    });

  }
});

export default NoteActions;
