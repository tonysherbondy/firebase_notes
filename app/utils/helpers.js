import axios from 'axios';
import Firebase from 'firebase';

let firebaseRef = new Firebase('https://amber-inferno-424.firebaseio.com/firebase_notes');
let firebaseApi = 'https://amber-inferno-424.firebaseio.com/firebase_notes';

function getRepos(username){
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}`);
}

var helpers = {
  getGithubInfo(username){
    return axios.all([getRepos(username), getUserInfo(username)])
      .then(arr => {
        return {
          repos: arr[0].data,
          bio: arr[1].data
        };
      });
  },

  setNotesForNotebook(notebookId, notes) {
    firebaseRef.child(notebookId).set({notes}, error => {
      if (error) {
        console.log('problem saving to firebase: ', error);
      } else {
        console.log('huzzah, notes saved!');
      }
    });
  },

  // Returns a promise
  getNotebook(notebookId) {
    return axios.get(`${firebaseApi}/${notebookId}.json`);
  }
};

export default helpers;
