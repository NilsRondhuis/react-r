import { NavLink, Outlet } from 'react-router-dom';
import * as CONFIG from '../../data/config';
import './Sales.scss';

const Sales = () => {
  return (
    <main>
      <header className="sales-header">
        <nav className="sales-nav">
          <ul className="list-sales-nav">
            {CONFIG.salesNav.map(({ href, text }) => (
              <li className="item" key={href}>
                <NavLink to={href} className="link">
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
    </main>
  );
};

export default Sales;
