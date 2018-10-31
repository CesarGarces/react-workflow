import React, { Component} from 'react';

class Navigation extends Component {
    render() {
        return(
            <nav className="navbar navbar-dark bg-dark">
                <div className="text-white">
                    {this.props.title}
                </div>
            </nav>
        );
    }
}

export default Navigation;
