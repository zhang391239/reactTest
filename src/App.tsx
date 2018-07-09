import * as React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './pages/login'
import AllContainers from './layout'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={AllContainers}></Route>
      </div>
    );
  }
}

export default App;
