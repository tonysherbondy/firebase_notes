import React from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import helpers from '../utils/helpers';


class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: []
    };
  }
  init(){
    let {username} = this.router.getCurrentParams();
    helpers.getNotesForUser(username, dataObj => {
      this.setState({notes: dataObj.val() || []});
    });

    helpers.getGithubInfo(username).then((dataObj) => {
      this.setState({
        bio: dataObj.bio,
        repos: dataObj.repos
      });
    });
  }
  componentWillMount(){
    this.router = this.context.router;
  }
  componentDidMount(){
    this.init();
  }
  componentWillUnmount(){
  }
  componentWillReceiveProps(){
    this.init();
  }
  handleAddNote(newNote){
    // TODO - Let's move this to an action
    let {username} = this.router.getCurrentParams();
    let notes = this.state.notes.concat([newNote]);
    helpers.setNotesForUser(username, notes);
    this.setState({notes});
  }
  render(){
    var username = this.router.getCurrentParams().username;
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
            notes={this.state.notes}
            addNote={this.handleAddNote.bind(this)} />
        </div>
      </div>
    );
  }
}

Profile.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Profile;
