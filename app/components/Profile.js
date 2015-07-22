import React from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
//import helpers from '../utils/helpers';

import Flux from '../dispatcher/dispatcher';
import NoteStore from '../stores/NoteStore';
import NoteActions from '../actions/NoteActions';

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      bio: {},
      repos: []
    };
  }

  initState(){
    let {username} = this.router.getCurrentParams();

    // Only emit this action on username change
    if (this.state.username !== username) {
      this.setState({username});

      NoteActions.fetchNotes(username);

      // TODO - turn to store/actions
      //helpers.getGithubInfo(username).then((dataObj) => {
        //this.setState({
          //bio: dataObj.bio,
          //repos: dataObj.repos
        //});
      //});

    }
  }

  componentWillMount(){
    this.router = this.context.router;
  }
  componentDidMount(){
    this.initState();
  }
  componentWillUnmount(){
  }
  componentWillReceiveProps(){
    console.log('will receive props');
    this.initState();
  }
  handleAddNote(newNote){
    console.log('call action', newNote);
    // TODO - Let's move this to an action
    //let {username} = this.router.getCurrentParams();
    //let notes = this.state.notes.concat([newNote]);
    //helpers.setNotesForUser(username, notes);
    //this.setState({notes});
  }
  render(){
    let {username} = this.state;
    return (
      <div className="row">
        <div className="col-xs-4">
          <UserProfile username={username} bio={this.state.bio}/>
        </div>
        <div className="col-xs-4">
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className="col-xs-4">
          <Notes
            username={username}
            notes={this.props.notes.toArray()}
            addNote={this.handleAddNote.bind(this)} />
        </div>
      </div>
    );
  }
}

Profile.contextTypes = {
  router: React.PropTypes.func.isRequired
};

// Connect to flux
let stores = [NoteStore];
Profile = Flux.connect(Profile, stores, () => ({
  notes: NoteStore.getNotes()
}));

export default Profile;
