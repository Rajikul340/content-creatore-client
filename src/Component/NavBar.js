import { Link } from "react-router-dom";

const NavBar = () => {

    return (
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl">content creator</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/dashboard'>dashboard</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/register'>Register</Link></li>
    </ul>
  </div>
</div>
    );
};

export default NavBar;