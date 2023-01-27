import PropTypes from 'prop-types';
import css from './EditorForm.module.css';

const EditorForm = ({ btnText, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.name.value;
    onSubmit(value);
    form.reset();
  };

  return (
    <div className={css.box}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <input className={css.input} type="text" name="name" />
        </label>
        <button type="submit" className={css.btn}>
          {btnText}
        </button>
      </form>
    </div>
  );
};

EditorForm.propTypes = {
  btnText: PropTypes.string.isRequired,
};

export default EditorForm;
