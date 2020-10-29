import React from 'react';
import TrainerApi from '../../Api/trainer/trainer';

class TrainerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: [],
    };
  }

  componentDidMount() {
    TrainerApi.getUngroupedTrainers().then((r) => {
      this.setState({ trainers: r });
    });
  }

  render() {
    return (
      <section className="groups-all-trainer">
        <h3>讲师列表</h3>
        <p>Trainers: {this.state.trainers.toLocaleString()}</p>
      </section>
    );
  }
}

export default TrainerList;
