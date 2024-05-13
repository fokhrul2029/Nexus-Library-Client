import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useContext } from "react";
import { AuthContext } from "../../../contextApi/AuthProvider";
import swal from "sweetalert";

function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const { user, logout } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-book">Add Book</NavLink>
      </li>
      <li>
        <NavLink to="/all-books">All Books</NavLink>
      </li>
      <li>
        <NavLink to="/borrowed-books">Borrowed Books</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logout()
      .then(() => {
        swal({
          title: "Logout Success!",
          icon: "success",
        });
      })
      .catch(() => {
        swal({
          title: "Request Failed!",
          text: "Something wnt wrong! Try later.",
          icon: "warning",
        });
      });
  };

  return (
    <div className="bg-base-300 mb-10">
      <div className="navbar container mx-auto h-24 px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span className="font-semibold px-1 rounded-md ">
                {user.displayName}
              </span>
              <img
                className="w-12 mr-2 h-12 border-4 rounded-full border-base-200 cursor-pointer"
                src={user.photoURL}
                alt={user.displayName}
                title={user.displayName}
              />
              <button onClick={handleLogout} className="btn">
                Logout
              </button>
            </>
          ) : pathname === "/login" ? (
            <Link to="/register" className="btn">
              Register
            </Link>
          ) : (
            <Link to="login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
