import React from 'react';
import ReactDOMServer from 'react-dom-server';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

var result = getGreeting({ firstName: 'James', lastName: 'Bond'});

export default ReactDOMServer.renderToStaticMarkup(result);
