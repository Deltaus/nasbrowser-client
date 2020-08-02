import React from "react";
import {Field, reduxForm} from "redux-form";

class AuthForm extends React.Component {

    renderError = ({error, touched}) => {
        if(touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input, meta, label, type}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type={type}/>
                <div>{this.renderError(meta)}</div>
            </div>
        )
    }

    onSubmit = (formValues) => {
        //console.log('submitting auth form');
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                <Field name='username' component={this.renderInput} label='Username' type='text'/>
                <Field name='password' component={this.renderInput} label='Password' type='password'/>
                <div>{this.props.error}</div>
                <button className='ui button primary'>Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    let errors = {};
    if(!formValues.username) {
        errors.username = 'Username field cannot be empty';
    }
    if(!formValues.password) {
        errors.password = 'Password field cannot be empty';
    }
    return errors;
}

export default reduxForm({
    form: 'AuthForm',
    validate
})(AuthForm);