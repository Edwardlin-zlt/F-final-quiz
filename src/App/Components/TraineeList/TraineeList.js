import React from 'react';
import TraineeApi from '../../../Api/trainee';

class TraineeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: [],
    };
  }

  componentDidMount() {
    TraineeApi.getUngroupedTrainees().then((r) => {
      this.setState({ trainees: r });
    });
  }

  render() {
    return (
      <section className="groups-all-trainee">
        <h3>学员列表</h3>
        <p>Trainees: {this.state.trainees.toLocaleString()}</p>
      </section>
    );
  }
}

export default TraineeList;
