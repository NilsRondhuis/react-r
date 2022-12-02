import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import css from "./Form.module.css";

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={(message) => <p>{message}</p>} />;
};

const schema = yup.object().shape({
  login: yup.string().required("Заповніть це поле"),
  email: yup.string().email(),
  pass: yup.string().min(6).max(16).required(),
});

const initialValues = {
  login: "",
  email: "",
  pass: "",
  licence: false,
};

const FormGlobal = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <label>
            Login
            <Field type="text" name="login" />
            {/* <ErrorMessage component="div" name="login" className={css.error} /> */}
            <FormError name="login" />
          </label>
          <label>
            Email
            <Field type="email" name="email" />
            <ErrorMessage component="div" name="email" className={css.error} />
          </label>
          <label>
            Password
            <Field type="password" name="pass" />
            <ErrorMessage component="div" name="pass" className={css.error} />
          </label>
          <label>
            <Field type="checkbox" name="licence" />
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default FormGlobal;
