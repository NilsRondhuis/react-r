import { Component } from 'react';
import s from './Dropdown.module.css';


class Dropdown extends Component {
  state = {
    visible: false,
  }

  toggle = () => {
    this.setState(prevState => {
      return { visible: !prevState.visible }
    })
  }

  render() {
    return (
      <div className={s.dropdown}>
        <button
          type='button'
          className={s.btn}
          onClick={this.toggle}
        >
          {this.state.visible ? 'Hide' : 'Showf'}
        </button>

        {this.state.visible && <div className={s.menu}>Выпадающее меню</div>}
      </div>
    )
  }
}
export default Dropdown;