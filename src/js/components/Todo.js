import React, { PropTypes } from "react"

export default class Todo extends React.Component {
    render() {
        return (
            <li>{this.props.text}</li>
        );
    }
}

Todo.propTypes = {
    text: PropTypes.string.isRequired
};
