import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './FormEdit.module.css';
import PropTypes from 'prop-types';

const initialValues = {
  img: '',
  name: '',
};

const schema = yup.object().shape({
  img: yup.string().url('Enter valid url'),
  name: yup.string('Enter valid name').required('This field name is required'),
});

const FormEdit = ({ onAddPlayer }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    onAddPlayer(values);
    actions.resetForm();
  };

  return (
    <div className={css.box}>
      <h2 className={css.title}>Add player</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span className={css.labelText}>Image url</span>
            <Field className={css.input} type="url" name="img" />
            <ErrorMessage component="span" name="img" className={css.error} />
          </label>
          <label className={css.label}>
            <span className={css.labelText}>Name</span>
            <Field className={css.input} type="name" name="name" />
            <ErrorMessage component="span" name="name" className={css.error} />
          </label>
          <button className={css.btn} type="submit">
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};

FormEdit.propTypes = {
  onAddPlayer: PropTypes.func.isRequired,
};

export default FormEdit;
