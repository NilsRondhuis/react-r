import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './SharedLayout.css';

const SharedLayout = props => {
  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          Your Clothes
        </a>

        <nav className="nav">
          <NavLink className="nav-link" to="/" end>
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<p>Loading page...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

SharedLayout.propTypes = {};

export default SharedLayout;
