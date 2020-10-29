import React from 'react'
import "./Header.css"

class Header extends React.Component {

    handleClick = () => {
        const {groupTrainee} = this.props;
        groupTrainee();
    }

    render() {
        return (
            <header className="groups-header">
                <h3 className="groups-header-title">分组列表</h3>
                <button type="button" onClick={this.handleClick}>
                    分组学员
                </button>
            </header>
        )
    }
}

export default Header;