import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  selected: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
