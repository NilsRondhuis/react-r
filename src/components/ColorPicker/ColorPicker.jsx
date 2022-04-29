import { Component } from 'react';
import s from './ColorPicker.module.css';


class ColorPicker extends Component {
    state = {
        optionIndex: 0,
    };

    setActiveIndex = (index) => {
        this.setState({ optionIndex: index });
    };
    
    render() {
        const { label } = this.props.options[this.state.optionIndex];

        return (
            <div className={s.container}>
                <h2 className={s.title}>Color Picker</h2>
                <p>Active color: {label}</p>
                <div>
                    {this.props.options.map(({ label, color }, i) => {
                        const isIndex = this.state.optionIndex === i;
                        return (
                            <button  
                            key={label}
                            type="button" 
                            className={isIndex ? s.btnActive : s.btn}
                            style={{ backgroundColor: color }}
                            onClick={() => this.setActiveIndex(i)}
                            >
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default ColorPicker;