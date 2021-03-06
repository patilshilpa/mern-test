  /* eslint-disable global-require */
import React from 'react';
import { browserHistory } from 'react-router';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';
import Singup from './modules/singup/Singup';
//import contactus from './modules/Contatus/contactus';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostListPage/PostListPage').default);
        });
      }}
    />
    <Route
      path="/posts/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostDetailPage/PostDetailPage').default);
        });
      }}
    />
   <Route
      path="/singup"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/singup/Singup').default);
        });
      }}
    />

      <Route
      path="/login"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/login/Login').default);
        });
      }}
    />


      <Route
      path="/email"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Email-notifications/Email').default);
        });
      }}
    />
    

     <Route
      path="/upload"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/upload/Upload').default);
        });
      }}
    />

     <Route
      path="/todo"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Todolist/TodoList').default);
        });
      }}
    />

   </Route>
);


