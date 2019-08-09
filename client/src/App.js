import React from 'react';
import {
  Route,
  Router
} from "react-router-dom";
import Login from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute"
import Form from './components/Form'
import FormList from "./components/FormList"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router> 
        <ProtectedRoute path='/form' component={FormList}/>
        <Route path="/login" component={Login} />
      </Router>
      <Form />
      <FormList />

    </div>
  );
}

// Notes to self: 
// useInput hook is the custom hook 
// it will live in its own file and i will import it to
// wherever im getting the token back. 
// im using the hook to add the token to local storage, 
// use it wherever axios is used. use it in RESPONSE in axios.

// Make: axiosWithAuth.js

// do i need "resetValues"? see link ian sent earlier to see example of this.

export default App;
