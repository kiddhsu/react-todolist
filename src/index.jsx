import React from 'react';
import ReactDom from 'react-dom';

function Main() {
  return <h1>Hi JSX！</h1>
}

ReactDom.render(<Main />, document.getElementById('root'));