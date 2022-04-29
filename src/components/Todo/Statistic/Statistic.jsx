
const Statistic = ({ done, count }) => {

    return (
        <div>
            <p>Общее кол-во: {count}</p>
            <p>Кол-во выполенных: {done}</p>
        </div>
    );
};

export default Statistic;