import React from 'react';

function App() {
  const value = 'My very World';
  return <div>Hello young mann, Welcome to the {value} {process.env.REACT_APP_API_URL}</div>;
}

export default App;
