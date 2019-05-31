import React from 'react';
import { NavBar } from './components';
import Routes from './Routes';
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Content> */}
      <Routes />
      {/* </Content> */}
    </div>
  );
}

export default App;
