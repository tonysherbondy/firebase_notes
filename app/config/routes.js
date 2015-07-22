import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import NotebookApp from '../components/NotebookApp';
import { Route, DefaultRoute } from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="notebook_app" path="notebook/:notebookId" handler={NotebookApp} />
    <Route name="profile" path="profile/:username" handler={Profile} />
    <DefaultRoute handler={Home} />
  </Route>
);
