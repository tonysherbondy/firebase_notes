import biff from '../dispatcher/dispatcher';

const NoteActions = biff.createActions({
  setNotes(notes) {
    this.dispatch({
      actionType: 'SET_NOTES',
      notes
    });
  }
});

export default NoteActions;
