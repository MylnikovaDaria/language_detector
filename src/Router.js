import React from 'react';
import {BrowserRouter as Router, Route}  from 'react-router-dom';

import Error from './components/Error.js';
import Main from './components/Main.js';

const AppRouter = () => {
  return (
    <Router>
      <Route path ='/' exact component={Main}/>
      <Route path ='/error/' component={Error}/>
    </Router>
  )
}

export default AppRouter;
