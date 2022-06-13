import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import Employee from './components/employee';
import NavBar from './components/navbar';
import NotFound from './components/notFound';
import './App.css';
import EditEmployee from './components/employeeEdit';
import Attendence from './components/attendence';

function App() {
  return (
    <React.Fragment>
    <NavBar />
    <main className='container'>
    <Switch>
      <Route path="/employees/:id" component={EditEmployee}/>
      <Route path="/attendence/:id" component={Attendence}/>
      <Route path="/employees" component={Employee} />
      <Route path="/not-found" component={NotFound} />
      <Redirect from='/' exact to="/employees" />
      <Redirect to='/not-found' />
    </Switch>
    </main>
    </React.Fragment>
  );
}

export default App;
