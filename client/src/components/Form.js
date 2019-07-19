import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({ errors, touched, isSubmitting }) {
  return (
    <Form>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="username" name="username" placeholder="username" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("username is required"),
    password: Yup.string()
      .min(7, "Password must be 7 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.username === "Austen") {
      setErrors({ username: "That username is already taken" });
    } else {
      axios
        .post("http://localhost:5000/api/register", values) 
        
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          // I DONT INSERT MY RESPONSE HERE? IT IS INSTEAD RETURNED HERE?
          // OPTION 1: I WRITE THE TOKEN GIVEN IN INSTRUCTIONS HERE
          // OPTION 2: I PUT THE TOKEN INTO A VARIABLE AND INSERT IT AFTER MY URL @ LINE 48
          // OPTION 3: I write the token in AxiosWithAuth?
          // OPTION 4:

          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }
})(LoginForm);

export default FormikLoginForm;