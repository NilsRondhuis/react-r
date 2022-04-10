import s from './ColorPicker.module.css';


const ColorPicker = ({ options }) => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Color Picker</h2>
            <div>
                {options.map(({ label, color }) => {
                    return (
                        <span 
                        key={label} 
                        className={s.option}
                        style={{ backgroundColor: color }}
                        >{label}</span>
                    );
                })}
            </div>
        </div>
    );
};

export default ColorPicker;