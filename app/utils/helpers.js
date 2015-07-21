import axios from 'axios';
import Firebase from 'firebase';

let firebaseRef = new Firebase('https://amber-inferno-424.firebaseio.com/firebase_notes');

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
  setNotesForUser(username, notes) {
    firebaseRef.child(username).set({notes}, error => {
      if (error) {
        console.log('problem saving to firebase: ', error);
      } else {
        console.log('huzzah, notes saved!');
      }
    });
  },

  getNotesForUser(username, cb) {
    firebaseRef.child(`${username}/notes`).once('value', cb);
  }
};

export default helpers;
