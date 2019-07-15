import React, {Component} from 'react';

import IndexUser from "./components/user/index"

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="container">
            <h1 className="display-4">User Crud</h1>
            <IndexUser />
        </div>
      </div>
    );
  }
}

export default App;
