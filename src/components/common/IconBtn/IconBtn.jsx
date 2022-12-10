import PropTypes from "prop-types";
import css from "./IconBtn.module.css";

const IconBtn = ({ children, onClick, ...allyProps }) => {
  return (
    <button type="button" className={css.btn} onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
};

IconBtn.defaultProps = {
  onClick: () => null,
  children: null,
};

IconBtn.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  "aria-label": PropTypes.string.isRequired,
};

export default IconBtn;
