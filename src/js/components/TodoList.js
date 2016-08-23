import React, { PropTypes } from "react"
import Todo from "./Todo"

export default class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo) => {
                    return (
                      <Todo
                        key={todo.id}
                        {...todo}
                        onTodoClick={() => this.props.toggleTodo(todo.id)}
                      />
                    );
                })}
            </ul>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
};
