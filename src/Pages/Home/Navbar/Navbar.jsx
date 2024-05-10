
import logo from "../../../assets/library.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  const { logOut } = useContext(AuthContext)
  const handleLogout = ()=>{
    logOut();
  }
  const links = 
  <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addBook">Add Book</NavLink></li>
        <li><NavLink to="/allBooks">All Books</NavLink></li>
        <li><NavLink to="/borrowedBooks">Borrowed Books</NavLink></li>
  </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
        <img className="text-center w-20 h-20" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  <Link to="/login"><button className="btn btn-ghost btn-sm">Login</button></Link>
  <Link to="/register"><button className="btn btn-ghost btn-sm">Register</button></Link>
  <button onClick={handleLogout} className="btn btn-ghost btn-sm">Logout</button>
  </div>
</div>
    );
};

export default Navbar;