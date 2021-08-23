import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


import Navigation from './components/NavBar/Navigation'
import menuitems from './components/NavBar/MenuItems'
import createNotes from './components/Notes/CreateNotes'
import assignments from './components/Asignements/Assignments'
import register from './components/Users/Register'
import NoteList from './components/Notes/NoteList'
import login from './components/Users/Login'  
import main from './components/Main/main'
import footer from './components/NavBar/Footer'
import about from './components/About/About'



function App() {
  return (
    <Router>
      <Navigation/>
      <Route path = "/" exact component = {menuitems}/>
      <Route path ="/notelist" component = {NoteList}/>
      <Route path ="/edit/id" component = {createNotes}/>
      <Route path ="/create" component = {createNotes}/>
      <Route path ="/register" component = {register}/>
      <Route path ="/login" component = {login}/>
      <Route path ="/assignments" component = {assignments}/>
      <Route path = "/about" component = {about}/>
      <Route path = "/" exact component = {main}/>
      <Route path ="/" component = {footer}/>
    </Router>
  );
}

export default App;
