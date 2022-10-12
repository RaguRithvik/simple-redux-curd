import React from 'react'
import { NavLink, Route, Routes} from 'react-router-dom'
import Addform from './Add'
import Edit from './Edit'
import { Home } from './Home'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" >Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/add">Add</NavLink>
            </li>
            {/* <li className="nav-item">
                <NavLink className="nav-link" to="/edit/:id">Edit</NavLink>
            </li> */}
        </ul>
        </div>
    </nav>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<Addform />} ></Route>
        <Route path="/edit/:id" element={<Edit />} ></Route>
    </Routes>
    </div>
  )
}

export default Navbar
