import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Addform = () => {
  const Contact = useSelector((state)=> state);
  console.log(Contact)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [getDate, setGetData] = useState({id: 0, name: "", email:""})

  const handleFormChange  = (e) =>{
    setGetData({...getDate, [e.target.name]:e.target.value, id: Contact[Contact.length -1].id+1 })
  }

  const getDatafu = (e) =>{
    e.preventDefault()
    dispatch({type:"ADD_CONTACT", payload: getDate});
    toast.success("Your Data Succesfully Added!");
    navigate("/")
  }
  return (
    <div>
      <h3 className='text-center'>Add Form</h3>
      <form onSubmit={getDatafu}>
          <div className="mb-3 mt-3">
            <div className="container">
              <div className="row">
                <div className="col-md-6 mb-3 mt-3">
                  <input type="text" onChange={(e)=>{handleFormChange(e)}} className="form-control" name='name'  placeholder="Enter Your Name" />
                </div>
                <div className="col-md-6 mb-3 mt-3">
                  <input type="email" onChange={(e)=>{handleFormChange(e)}} className="form-control" name='email'  placeholder="Enter email" />
                </div>
                <div className="col-md-6 mb-3 mt-3">
                  <input type="tel" onChange={(e)=>{handleFormChange(e)}} className="form-control" name="number"  placeholder="Enter Phone" />
                </div>
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </div>
</form>
    </div>
  )
}

export default Addform
