import React, { PropTypes } from "react"

export default class Todo extends React.Component {
    render() {
        return (
            <li
              style={{textDecoration: this.props.completed ? "line-through" : "none"}}
              onClick={this.props.onTodoClick}
            >
              {this.props.text}
            </li>
        );
    }
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onTodoClick: PropTypes.func.isRequired
};
