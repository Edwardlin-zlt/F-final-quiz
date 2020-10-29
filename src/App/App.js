import React, {Component} from 'react';
import TraineeList from "./Components/TraineeList/TraineeList";
import Header from "./Components/Header/Header"
import './App.scss';

class App extends Component {
    render() {
        return (
            <div data-testid="app" className="App">
                <Header/>
                <TraineeList/>
            </div>
        );
    }
}

export default App;
