import './Box.css';

const Box = ({ type = 'small'}) => {
    return <div className={`box box-${type}`}>Box</div>;
};

export default Box;