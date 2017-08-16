import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = (values) => {
  const errors = {}
  if (!values.first_name) {
    errors.first_name = 'Required'
  }
  if (!values.last_name) {
    errors.last_name = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'Password Must be minimum 6 characters.'
  }
  return errors
}

const renderField = ({ name, type, label, input, placeholder, meta: { error, touched } }) => (
  <div className="form-group">
    <label htmlFor={ name }>{ label }</label>
    <input { ...input } type={ type } name={ name } placeholder={placeholder} 
    className={ touched ? (error ? 'form-control is-invalid' : 'form-control is-valid') : 'form-control' } />
    {touched && !error && <i className="fa fa-check input-icon" aria-hidden="true"></i> }
    {touched && error && <div className="invalid-feedback">{ error }</div>}
  </div>
)

let RegisterForm = ({ handleSubmit, submitting, error }) => (
  <form onSubmit={ handleSubmit }>
    <Field name="first_name" label="First Name" placeholder="John" component={renderField} type="text"  />
    <Field name="last_name" label="Last Name" placeholder="Doe" component={renderField} type="text"  />
    <Field name="email" label="Email" placeholder="example@mail.com" component={renderField} type="text"  />
    <Field name="password" label="Password" placeholder="**********" component={renderField} type="password"  />
    <button disabled={submitting} type="submit" className="btn btn-primary pull-right">Register</button>
    { error }
  </form>
)

RegisterForm = reduxForm({
  form: 'register',
  validate,
})(RegisterForm)

export default RegisterForm