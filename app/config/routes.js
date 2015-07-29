import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import NotebookEditor from '../components/NotebookEditor';
import NotebookApp from '../components/NotebookApp';
import NotebookViewer from '../components/NotebookViewer';
import { Route, DefaultRoute, Redirect } from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="notebook_app" path="notebook/:notebookId" handler={NotebookApp}>
      <Route name="edit" path="edit" handler={NotebookEditor} />
      <Route name="view" path="view" handler={NotebookViewer} />
      <Redirect to="view" />
    </Route>
    <DefaultRoute handler={Home} />
  </Route>
);
