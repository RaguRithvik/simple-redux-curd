import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
export const Home = () => {
  const contact = useSelector((state)=> state);
  const dispatch = useDispatch()
  
  const deleteData = (id) =>{
    dispatch({type:"DELETE_CONTACT", payload:id})
  }
  return (
    <div className="">
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h3 className='text-center'>This a Home Page</h3>
            <br />
          <table className='table table-bordered'>
          <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
          {contact && contact.map((data, index) =>{ 
            return (
            <tr key={index}>
              <td>{data.id}</td> 
              <td>{data.name}</td> 
              <td>{data.email}</td> 
              <td>{data.number}</td> 
              <td>
                <NavLink className="btn btn-primary" to={`/edit/${data.id}`}>Edit</NavLink> <button className="btn btn-danger" onClick={() =>deleteData(data.id)}>Delete</button>
            </td> 
            </tr>)
          })}
        </tbody>
        </table>
          </div>
        
        </div>
      </div>
      
    </div>
  )
}
