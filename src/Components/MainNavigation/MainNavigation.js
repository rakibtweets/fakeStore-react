/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../HOC/useAuth';

function MainNavigation() {
  const { user } = useAuth();
  return (
    <div className="navbar  bg-neutral lg:px-8 text-neutral-content">
      <div className="navbar-start ">
        <div className="dropdown">
          <label className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/product">Products</Link></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">FakeShop</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to="/product" className=" text-ghost normal-case">Products</Link></li>

          {
          !user.email ? <li><Link to="/login" className=" text-ghost normal-case">Login</Link></li>
          : <li><Link to="/#" className=" text-ghost normal-case">{user?.email}</Link></li>
          }
        </ul>
      </div>

    </div>
  );
}

export default MainNavigation;
