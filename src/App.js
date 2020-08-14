import React from 'react';
import './App.css';
import './reset.css';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Nav from './Components/Nav';
import Post from './Components/Post';

class App extends React.Component {
  render(){
    return <div>
      <Auth/>
      <Dashboard/>
      <Form />
      <Post/>
      <Nav/>
    </div>
  }
}





export default App;

<Switch>
      <Route exact path="/" component={Auth}/>
      <Route path="/Dash" component={}/>
      <Form path="/" component={}/>
      <Post path="/" component={}/>
      <Nav path="/" component={}/>
  
  </Switch>