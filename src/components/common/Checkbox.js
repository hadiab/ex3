import React from 'react'

const Checkbox = ({ input, name, label }) => {
  return (
    <label className="custom-control custom-checkbox">
      <input { ...input } name={name} type="checkbox" className="custom-control-input" />
      <span className="custom-control-indicator" ></span>
      <span className="custom-control-description" >{ label }</span>
    </label>
  )
}

export default Checkbox