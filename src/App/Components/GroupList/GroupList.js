import React from 'react';
import GroupApi from '../../../Api/group/group';
import GroupListItem from './GroupListItem/GroupListItem';

class GroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    GroupApi.getGroups().then((r) => this.setState({ groups: r }));
  }

  render() {
    const { groups } = this.state;
    return (
      <section>
        {groups.map((group) => (
          <GroupListItem group={group} />
        ))}
      </section>
    );
  }
}

export default GroupList;
