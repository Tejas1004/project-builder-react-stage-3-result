import React, { Component } from 'react'
import './App.css';
import HomeComponent from './Components/Home';
import QuizComponent from './Components/Quiz';
import ResultComponent from './Components/Result';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      ans: [],
      res: ""
    }
  }
  getAns = (newAns) => {
    this.setState({
      ans: [...newAns]
    })
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"><HomeComponent /></Route>
            <Route path="/quiz"><QuizComponent sentAns={this.getAns} /></Route>
            <Route path="/result"><ResultComponent sentAns={this.state.ans} /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}