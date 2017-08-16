import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
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

let LoginForm = ({ handleSubmit, submitting, error }) => {
  return (
    <form onSubmit={ handleSubmit }>
      <Field name="username" label="Username" placeholder="example" component={renderField} type="text" />
      <Field name="password" label="Password" placeholder="**********" component={renderField} type="password" />
      <button disabled={submitting} type="submit" className="btn btn-primary pull-right">Login</button> 
      {error &&
        <strong>{error}</strong>
      }
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login',
  validate,
})(LoginForm)

export default LoginForm