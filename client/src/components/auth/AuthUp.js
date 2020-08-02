import React from "react";
import {connect} from "react-redux";
import {signUp} from "../../actions";
import AuthForm from "./AuthForm";

class AuthUp extends React.Component {
    onSubmit = (formValues) => {
        this.props.signUp(formValues);
    }

    render() {
        return (
            <div>
                <h2>Please sign up</h2>
                <AuthForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

/*
const mapStateToProps = (state) => {
    return {auth: state.authObj.auth}
}
*/

export default connect(null, {
    signUp
})(AuthUp);