import { Link, Outlet } from 'react-router-dom';

const SharedLayout = props => {
  return (
    <>
      <header>
        <nav>
          <Link to="/login">Log In</Link>
        </nav>
      </header>
    </>
  );
};

export default SharedLayout;
