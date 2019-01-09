import React, { Component } from 'react';
import axios from 'axios';
import Table from './table';
import './scoreboard.scss';

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {players: []};
  }
  componentDidMount(){
    axios.get('https://sleepy-atoll-27552.herokuapp.com/user')
    .then(response => {
      this.setState({ players: response.data.sort((a, b) => b.score - a.score )});
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  render() {
    return (
      <div className="scoreboard">
        <h1>ТАБЛИЦА РЕКОРДОВ</h1>
        <Table data = {this.state.players} />
      </div>
      
    );
  };
}

export default ScoreBoard;
