import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class Header extends React.Component {

    renderLinks = () => {
        if(this.props.authenticated) {
            return (
                <div className='right menu'>
                    <div className='item'>
                        <Link className='ui red button' to='/auth/signOut'>Sign Out</Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='right menu'>
                    <div className='item'>
                        <Link className='ui primary button' to='/auth/signUp'>Sign Up</Link>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='ui secondary pointing menu'>
                <Link to='/'  className='item'>Media</Link>
                {this.renderLinks()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {authenticated: state.authObj.auth};
}

export default connect(mapStateToProps)(Header);