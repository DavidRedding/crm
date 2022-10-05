import temple from '../assets/temple.svg';
import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout';

const Navbar = ({ user }) => {
  const { logout, isPending } = useLogout();

  return (
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

        {!user && (
          <>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li className="ml-3">
              <Link to="/signup">Sign up</Link>
            </li>
          </>
        )}

        {user && (
          <li className="ml-3">
            {!isPending && (
              <button
                onClick={logout}
                className="px-2 p-1 bg-white border rounded-[.25rem] text-var-prim border-var-prim hover:text-white hover:bg-var-prim"
              >
                Logout
              </button>
            )}
            {isPending && (
              <button
                disabled
                className="px-2 p-1 bg-white border rounded-[.25rem] text-gray-400 border-gray-200 hover:text-white hover:bg-var-prim"
              >
                Logging Out..
              </button>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
