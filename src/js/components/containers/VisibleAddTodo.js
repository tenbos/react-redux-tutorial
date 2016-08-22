import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as TodoActionCreators from "../../actions"
import AddTodo from "../AddTodo"

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(TodoActionCreators, dispatch);
};

const VisibleAddTodo = connect(
    null,
    mapDispatchToProps
)(AddTodo);

export default VisibleAddTodo
