import s from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => {
    return (
        <div>
              <button className={s.btn} type="button" onClick={onIncrement}>
                  Увеличить на 1
              </button>
              <button className={s.btn} type="button" onClick={onDecrement}>
                  Уменьшить на 1
              </button>
        </div>
    );
};

export default Controls;