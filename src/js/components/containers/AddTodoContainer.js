import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { addTodo } from "../../actions"
import AddTodo from "../AddTodo"

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTodo }, dispatch);
};

const AddTodoContainer = connect(
    null,
    mapDispatchToProps
)(AddTodo);

export default AddTodoContainer
