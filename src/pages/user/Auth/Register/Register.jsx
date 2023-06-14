import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import InputField from "~/components/Input/InputField";
import authAPI from "~/api/user/authAPI";
import { useState } from "react";

const cx = classNames.bind(styles);
const Register = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const initialValues = {
    username: "",
    email: "",
    password: "",
    phone: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required"),
    email: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
    phone: Yup.string().required("This field is required"),
  });

  const handleSubmit = (values) => {
    console.log("Submit");
    const fetchAPI = async () => {
      const res = await authAPI.register(values);
    };

    fetchAPI();
  };
  // Return the JSX code for the login component
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {(formikProps) => {
        const { values, error, touched } = formikProps;
        return (
          <div className={cx("wrapper")}>
            <h1>Register</h1>
            <Form className={cx("form")}>
              <FastField
                name="username"
                component={InputField}
                placeholder="Enter your name"
                type="text"
              />

              <FastField
                name="email"
                component={InputField}
                placeholder="Enter your email"
                type="email"
              />

              <FastField
                name="phone"
                component={InputField}
                placeholder="Enter your phone number"
                type="text"
              />

              <FastField
                name="password"
                component={InputField}
                placeholder="Enter your password"
                type="text"
              />
              <button type="submit" className={cx("btn-submit")}>
                Submit
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Register;
