import React from 'react';
import './App.css';
import './reset.css';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth';
import DashBoard from './Components/DashBoard';
import Form from './Components/Form';
import Nav from './Components/Nav';
import Post from './Components/Post';

class App extends React.Component {
  render(){
    return <div>
    <Switch>
      <Route exact path="/Auth" component={Auth}/>
      <Route path="/Dashboard" component={DashBoard}/>
      <Form path="/Form" component={Form}/>
      <Post path="/Post" component={Post}/>
      <Nav path="/Nav" component={Nav}/>
  
  </Switch>
    </div>
  }
}

export default App;

