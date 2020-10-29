import React from 'react';
import TrainerApi from '../../../Api/trainer/trainer';
import NameBox from "../NameBox/NameBox";
import "./TrainerList.css"

class TrainerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trainers: [],
        };
    }

    componentDidMount() {
        TrainerApi.getUngroupedTrainers().then((response) => {
            this.setState({trainers: response});
        });
    }

    render() {
        const {trainers} = this.state
        return (
            <section className="groups-all-trainer">
                <h3>讲师列表</h3>
                <div className="trainers">
                    {trainers.map(trainer => <NameBox person={trainer} key={trainer.id}/>)}
                </div>
            </section>
        );
    }
}

export default TrainerList;
