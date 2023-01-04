import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  return (
    <div>
      <Link to={to}>{children}</Link>
    </div>
  );
};

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BackLink;
