import * as React from 'react';
// import './App.css';
import * as Router from 'react-router-dom';
class App extends React.Component {
  public render() {
    return (
      <div>
        <Router.Switch>
          <Router.Route path="/login" component={()=><p></p>}></Router.Route>
          <Router.Route path="/" render={()=><p></p>}></Router.Route>
        </Router.Switch>
      </div>
    );
  }
}

export default App;
