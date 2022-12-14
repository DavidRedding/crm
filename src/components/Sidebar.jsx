import { NavLink, useLocation } from 'react-router-dom';

import DashboardIcon from '../assets/dashboard_icon.svg';
import AddIcon from '../assets/add_icon.svg';
import Avatar from './Avatar';

const Sidebar = ({ user }) => {
  const path = useLocation().pathname;
  return (
    <div className="relative hidden min-h-screen text-white w-52 tablet:block bg-var-prim">
      <div className="w-52 ">
        <div className="pb-8 font-bold text-center border-b border-gray-200 p-7 ">
          <Avatar src={user.photoURL} />
          <p className="mt-1">Hey {user.displayName}</p>
        </div>

        <nav className="mt-16 ml-5 ">
          <ul>
            <li className="mt-2">
              <NavLink exact to="/" className="flex w-full p-2" activeClassName="text-[#555] bg-var-bg rounded-l-3xl">
                <img
                  src={DashboardIcon}
                  alt="dashboard icon"
                  className={`${path === '/' ? 'invert-[40%]' : 'invert'} mr-2`}
                />

                <span>Dashboard</span>
              </NavLink>
            </li>

            <li className="mt-2">
              <NavLink to="/create" className="flex w-full p-2 " activeClassName="text-[#555] bg-var-bg rounded-l-3xl">
                <img
                  src={AddIcon}
                  alt="add project icon"
                  className={`${path === '/create' ? 'invert-[40%]' : 'invert'} mr-2`}
                />

                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
