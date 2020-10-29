import React from 'react';
import GroupApi from '../../../Api/group/group';
import GroupListItem from './GroupListItem/GroupListItem';
import "./GroupList.css"

class GroupList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [{
                id: 1,
                trainees: [
                    {id: 1, name: "Lintao"},
                    {id: 2, name: "JOJO"}
                ],
                trainers: [
                    {id: 3, name: "qiuqiu"},
                    {id: 4, name: "v"}
                ]
            }, {
                id:2,
                trainees: [
                    {id: 5, name: "Lintao"},
                    {id: 6, name: "JOJO"}
                ],
                trainers: [
                    {id: 7, name: "qiuqiu"},
                    {id: 8, name: "v"}
                ]
            }]
        };
    }

    // componentDidMount() {
    //     GroupApi.getGroups().then((r) => this.setState({groups: r}));
    // }

    render() {
        const {groups} = this.state;
        return (
            <section className="group-list">
                {groups.map((group) => (
                    <GroupListItem group={group} key={group.id}/>
                ))}
            </section>
        );
    }
}

export default GroupList;
