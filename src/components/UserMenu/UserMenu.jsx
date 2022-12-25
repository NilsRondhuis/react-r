import React from 'react';
import PropTypes from 'prop-types';

const UserMenu = props => {
  return (
    <div>
      <button type="button">Log in</button>
      <p>User</p>
      <button type="button">Log out</button>
    </div>
  );
};

UserMenu.propTypes = {};

export default UserMenu;
