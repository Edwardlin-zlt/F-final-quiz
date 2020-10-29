import React from 'react';
import NameBox from '../../NameBox/NameBox';

function GroupListItem(props) {
  const { group } = props;
  const { trainees, trainers, groupId } = group;
  return (
    <div className="trainee-group-row">
      <div className="group-bar">
        <span>{groupId} 组</span>
        <span className="group-trainer">
          {trainers && trainers.map((trainer) => <NameBox person={trainer} />)}
        </span>
      </div>
      <div className="trainee-names">
        {trainees && trainees.map((trainee) => <NameBox person={trainee} />)}
      </div>
    </div>
  );
}

export default GroupListItem;
