import { NavLink, Outlet } from 'react-router-dom';
import './SharedLayout.scss';
import * as CONFIG from 'data/config';

const SharedLayout = () => {
  return (
    <div className="main-container">
      <div className="sidebar">
        <nav>
          <ul className="list-nav">
            {CONFIG.sidebarNav.map(({ href, text }) => (
              <li key={href} className="item">
                <NavLink to={href} className="nav-link">
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
