import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { setVisibilityFilter } from "../../actions"
import Link from "../Link"

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.visibilityFilter === ownProps.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setVisibilityFilter }, dispatch);
};

const LinkContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default LinkContainer
