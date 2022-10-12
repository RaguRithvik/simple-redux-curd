import React from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {
    const {id} = useParams();
  return (
    <div>
      <h3 className='text-center'>Edit Form {id}</h3>
      <form >
          <div className="mb-3 mt-3">
            <div className="container">
              <div className="row">
                <div className="col-md-6 mb-3 mt-3">
                  <input type="text" className="form-control"  placeholder="Enter Your Name" />
                </div>
                <div className="col-md-6 mb-3 mt-3">
                  <input type="email" className="form-control"  placeholder="Enter email" />
                </div>
                <div className="col-md-6 mb-3 mt-3">
                  <input type="tel" className="form-control"  placeholder="Enter Phone" />
                </div>
              </div>
              <button type="submit" className="btn btn-success">Update</button>
            </div>
          </div>
    </form>
    </div>
  )
}

export default Edit
