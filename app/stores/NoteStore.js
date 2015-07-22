import biff from '../dispatcher/dispatcher';
import Immutable from 'immutable';

let notes = Immutable.List();

const NoteStore = biff.createStore({
  getNotes() {
    return notes;
  }
}, payload => {
  switch (payload.actionType) {
    case 'SET_NOTES': {
      notes = payload.notes;
      NoteStore.emitChange();
      break;
    }
  }
});

export default NoteStore;
