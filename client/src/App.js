import React from 'react';
import './App.css';
import NameCard from './components/NameCard'
import Form from './components/RegisterForm'

// x Registration form built with formik.Include inputs for a username and a pw

//  x Form validation using Yup

//  x At least one class component 

//  Tests for at least one element, one event, and one unit test for a function

//  x POST request made from the registration form to 
// http://localhost:5000/api/register to add a user

// x GET request made to http://localhost:5000/api/restricted/data 
// to retrieve the data

// x Map over the array of objects you recieve,
// render some or all of it's info to the DOM.


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // Initiall I had set this up
      names: []
    };
  }

  changeName = (names) => {
    this.setState({ names });
  }

  fetchUser = () => {
    fetch('http://localhost:5000/api/restricted/data')
      .then(res => res.json())
      .then(data => this.setState({ names: data }));
  }

  // useEffect(() => {fetch}, [])
  componentDidMount() {
    console.log("First Render (mounting)");
    this.fetchUser();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    // this will cause an infinite loop
    // this.setState({counter: this.state.counter+1 });

    // useEffect(() => {fetch}, [this.state.names])
    if (prevState.names !== this.state.names) {
      this.fetchUser();
    }
  }

  render() {
    return (
      <div className="App">
        <Form />
        <NameCard names={this.state.names} />
      </div>
    );
  }
}

export default App;
