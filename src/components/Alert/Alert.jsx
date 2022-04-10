import PropTypes from 'prop-types';
import s from './Alert.module.css';


const Alert = ({ text, type }) => {
    return (
        <p role="alert" className={s[type]}>{text}</p>
    );
};

Alert.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['error', 'warning', 'success']),
};

export default Alert;