import React, { PropTypes } from "react"

export default class AddTodo extends React.Component {
    render() {
        let input;
        return (
            <div>
                <input ref={(node) => { input = node; }} />
                <button onClick={() => {
                    this.props.addTodo(input.value);
                    input.value = "";
                }}>Add Todo</button>
            </div>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};
