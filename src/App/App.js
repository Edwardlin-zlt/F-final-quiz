import React, { Component } from 'react';
import TraineeList from './Components/TraineeList/TraineeList';
import Header from './Components/Header/Header';
import './App.scss';
import GroupList from './Components/GroupList/GroupList';
import TrainerList from './TrainerLIst/TrainerList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Header />
        <GroupList />
        <TrainerList />
        <TraineeList />
      </div>
    );
  }
}

export default App;
