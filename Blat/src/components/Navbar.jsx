import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <nav className="bg-gray-800 p-4 h-16">
      <ul className="flex justify-center items-center">
        <li>
          <Link to="/" className="text-white font-semibold text-xl mx-[20px]">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-300 ml-4 mx-[20px]">About</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-gray-300 ml-4 mx-[20px]">Contact</Link>
        </li>
        <li>
          {isAuthenticated && (<span className="text-white mx-[20px]">Hello, {user.email}</span>)}
        </li>
        <li>
          {isAuthenticated ? (
            <button 
              onClick={() => logout()} 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <button 
              onClick={() => loginWithRedirect()} 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
