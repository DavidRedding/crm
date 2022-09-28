import temple from '../assets/temple.svg';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="w-full py-8 mb-20 text-[#333]">
    <ul className="flex items-center justify-between">
      <li className="flex items-center mr-auto">
        <Link to="/">
          <img className="mr-2 -mt-2 w-9" src={temple} alt="logo" />
        </Link>
        <Link to="/">
          <span className="font-semibold">The Dojo</span>
        </Link>
      </li>

      <li>
        <Link to="/login">Login</Link>
      </li>

      <li className="ml-3">
        <Link to="/signup">Signup</Link>
      </li>

      <li className="ml-3">
        <button className="px-2 py-1 bg-white border-2 rounded-[.25rem] text-var-prim border-var-prim hover:text-white hover:bg-var-prim">
          Logout
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
