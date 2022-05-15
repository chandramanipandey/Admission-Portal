import React from 'react'

export default function JumbotronDark({title}) {
	return (
		<div className="row align-items-md-stretch w-100 mb-3">
        <div className="col-md">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
	)
}
