import React from 'react';
import './App.css';
import './reset.css';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import DashBoard from './Components/DashBoard/DashBoard';
import Form from './Components/Form/Form';
import Nav from './Components/Nav/Nav';
import Post from './Components/Post/Post';

class App extends React.Component {
  render(){
    return <div>

    <Switch>
      <Route exact path="/Auth" component={Auth}/>
      <Route path="/Dashboard" component={DashBoard}/>
      <Route path="/Form" component={Form}/>
      <Route path="/Post" component={Post}/>
      <Route path="/Nav" component={Nav}/>
  </Switch>
    </div>
  }
}

export default App;

