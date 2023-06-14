import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import InputField from "~/components/Input/InputField";
import authAPI from "~/api/user/authAPI";

const cx = classNames.bind(styles);
const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    user: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    user: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    const fetchAPI = async () => {
      const res = await authAPI.login(values);
      if (res.accessToken) {
        localStorage.setItem("token", res.accessToken);
        navigate("/");
        window.location.reload();
      }
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
        // console.log({ values, error, touched });
        //do smt
        return (
          <div className={cx("wrapper")}>
            <h1>Login</h1>
            <Form className={cx("form")}>
              <FastField
                name="user"
                component={InputField}
                placeholder="Username"
                type="text"
              />

              <FastField
                name="password"
                component={InputField}
                placeholder="Password"
                type="text"
              />
              <button type="submit" className={cx("btn-submit")}>
                Login
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
