import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { toggleTodo } from "../../actions"
import TodoList from "../TodoList"

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleTodo }, dispatch);
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList
