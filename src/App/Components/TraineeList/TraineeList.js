import React from 'react';
import TraineeApi from '../../../Api/trainee/trainee';
import NameBox from "../NameBox/NameBox";
import "./TraineeList.css"

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
      const {trainees} = this.state;
    return (
      <section className="groups-all-trainee">
        <h3>学员列表</h3>
        <div className="trainees">
          {trainees.map(trainee => <NameBox person={trainee} key={trainee.id}/>)}
        </div>
      </section>
    );
  }
}

export default TraineeList;
