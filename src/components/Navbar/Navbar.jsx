import { Link, NavLink } from 'react-router';
import userImg from '../../assets/user.png'
import { use } from 'react';
import AuthContext from '../../provider/AuthContext';

const Navbar = () => {
    const {user, logout} = use(AuthContext)
    const handleLogout = () => {
        //console.log("User logged out")
        logout()
          .then(() => {
            alert("You logged out")
          })
          .catch((error) => {
            alert(error)
          });

    }
    return (
      <div className="flex justify-between items-center">
        <div className="">{user && user.email}</div>
        <div className="nav flex gap-5 text-accent">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>
        <div className="flex gap-5">
          <img className='w-12 rounded-full' src={`${user ? user.photoURL : userImg}`} alt="" />
          {user ? (
            <button onClick={handleLogout} className="btn btn-primary px-10">Logout</button>
          ) : (
            <Link to={"/auth/login"} className="btn btn-primary px-10">
              Login
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;