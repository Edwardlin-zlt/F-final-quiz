import React from 'react';
import NameBox from '../../NameBox/NameBox';
import "./GroupListItem.css"

function GroupListItem(props) {
    const {group} = props;
    const {trainees, trainers, id} = group;
    return (
        <div className="group-list-item">
            <div className="group-bar">
                <span className="group-id">{id} 组</span>
                <span className="group-trainer">
                  {trainers && trainers.map((trainer) => <NameBox person={trainer} key={trainer.id}/>)}
                </span>
            </div>

            <div className="trainee-names">
                {trainees && trainees.map((trainee) => <NameBox person={trainee} key={trainee.id}/>)}
            </div>
        </div>
    );
}

export default GroupListItem;
