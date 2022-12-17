import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './MaterialEditor.module.css';

const initialValues = {
  title: '',
  url: '',
};

const schema = yup.object().shape({
  title: yup.string('Enter valid title').required('Title field is requared'),
  url: yup.string().url('Enter valid url').required('Link field is requared'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <div className={css.error}>{message}</div>}
    />
  );
};

const MaterialEditor = ({ onSubmit, textBtn }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({ isSubmitting }) => {
        return (
          <Form className={css.form}>
            <label className={css.label}>
              <span className={css.title}>Title*</span>
              <Field type="text" name="title" className={css.input} />
              <FormError name="title" />
            </label>
            <label className={css.label}>
              <span className={css.title}>Link*</span>
              <Field type="url" name="url" className={css.input} />
              <FormError name="url" />
            </label>
            <button type="submit" className={css.btn} disabled={isSubmitting}>
              {textBtn}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

MaterialEditor.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
FormError.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MaterialEditor;
