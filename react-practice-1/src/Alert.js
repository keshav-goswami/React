import React from 'react'

export default function (props) {
  return (
    props.text && <div className='container'>
        <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.text.typ}</strong>: {props.text.msg}.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
