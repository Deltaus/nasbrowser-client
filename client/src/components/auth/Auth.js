import React from "react";
import {connect} from "react-redux";
import {signIn} from "../../actions";
import AuthForm from "./AuthForm";

class Auth extends React.Component {
    onSubmit = (formValues) => {
        this.props.signIn(formValues);
    }

    render() {
        return (
            <div>
                <h2>Please login using a proved account</h2>
                <AuthForm onSubmit={this.onSubmit} error={this.props.errorMessage}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {errorMessage: state.authObj.errorMessage}
}

export default connect(mapStateToProps, {
    signIn: signIn
})(Auth);