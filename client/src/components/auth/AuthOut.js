import React from "react";
import {connect} from 'react-redux';
import {signOut} from "../../actions";
import history from "../../history";

class SignOut extends React.Component {
    componentDidMount() {
        this.props.signOut();
    }

    backToLoginPage() {
        history.push('/auth/login');
    }

    render() {
        return (
            <div>
                {this.backToLoginPage()}
            </div>
        )
    }
}

export default connect(null, {
    signOut
})(SignOut);