import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Checkbox } from '../../common'

import ImagesUploader from 'react-images-uploader'
import 'react-images-uploader/styles.css'
import 'react-images-uploader/font.css'

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.location) {
    errors.location = 'Required'
  } 
  if (!values.address) {
    errors.address = 'Required'
  } 
  return errors
}

const renderCheckbox = ({ name, label, input }) => (
  <div className="form-row">
    <div className="col">
      <div className="form-check">
        <Checkbox name={name} label={label} input={input} />
      </div>
    </div>
  </div>
)

const renderField = ({ name, type, label, input, placeholder, meta: { error, touched } }) => (
  <div className="form-group">
    <label htmlFor={ name }>{ label }</label>
    <input { ...input } type={ type } name={ name } placeholder={placeholder} 
    className={ (touched && error) ? 'form-control is-invalid' : 'form-control'} />
    {touched && error && <div className="invalid-feedback">{ error }</div>}
  </div>
)

let HotelForm = ({ handleSubmit, submitting, edit }) => {
  return (
    <div>
      <h2>Create Hotel</h2>
      <hr/>
      <form onSubmit={ handleSubmit } noValidate>
        <Field label="Name" name="name" placeholder="Hotel name" component={renderField} type="text" />
        <Field label="Location" name="location" placeholder="Hotel location" component={renderField} type="text" />
        <Field label="Address" name="address" placeholder="Hotel address" component={renderField} type="text" />
        <Field label="Latitude" name="lat" placeholder="Hotel latitude" component={renderField} type="number" />
        <Field label="Longitude" name="long" placeholder="Hotel longitude" component={renderField} type="number" />
        <Field label="TV" name="tv" component={renderCheckbox} type="text" />
        <Field label="Refrigerator" name="refrigerator" component={renderCheckbox} type="text" />
        <Field label="Safe" name="safe" component={renderCheckbox} type="text" />
        <Field label="Tea & Coffee" name="tea_coffee" component={renderCheckbox} type="text" />
        { edit &&
        <ImagesUploader
          url="http://localhost/api/upload_image"
          optimisticPreviews
          multiple={false}
          onLoadEnd={(err) => {
            if (err) {
              console.error(err)
            }
          }}
          label="Upload a picture"
				/>
        }
        <button disabled={submitting} type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  )
}

HotelForm = reduxForm({
  form: 'hotel',
  validate
})(HotelForm)

export default HotelForm
