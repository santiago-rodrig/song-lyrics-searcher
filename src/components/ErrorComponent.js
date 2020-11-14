import React from 'react'

const ErrorComponent = ({ children }) => (
  <div className="col-12 col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3">
    <div className="alert alert-danger p-2">
      <p className="text-center">{children}</p>
    </div>
  </div>
)

export default ErrorComponent
