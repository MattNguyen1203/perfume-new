import { FastField, Form, Formik } from "formik";
import classNames from "classnames/bind";
import styles from "./CheckoutForm.module.scss";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { useState } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import InputField from "~/components/Input/InputField";
import productAPI from "~/api/user/productAPI";
import orderAPI from "~/api/user/orderAPI";

const cx = classNames.bind(styles);

const CheckoutForm = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { list } = useSelector((state) => state.order);
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    phone: "",
    address: "",
    email: "",
    paymentByCash: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    phone: Yup.number().required("This field is required"),
    address: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Please enter the correct email")
      .required("This field is required"),
  });

  const handleSubmit = async (values) => {
    const order = {
      status: "Dispatched",
      cart: list,
      ...values,
      phone: `0${values.phone}`,
    };
    const res = await orderAPI.addOrder(order);

    if (res) {
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleBackHome = () => {
    navigate("/");
  };

  const handleBackList = () => {
    navigate("/products");
  };
  return (
    <>
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
            <Form className={cx("form")}>
              <FastField
                name="name"
                component={InputField}
                label="Your Name"
                placeholder="Your Name"
                type="text"
              />

              <FastField
                name="phone"
                component={InputField}
                label="Phone Number"
                placeholder="Phone Number"
                type="number"
              />

              <FastField
                name="address"
                component={InputField}
                label="Address"
                placeholder="Address"
                type="text"
              />

              <FastField
                name="email"
                component={InputField}
                label="Email"
                placeholder="Email"
                type="text"
              />

              <button type="submit" className={cx("btn-submit")}>
                Order
              </button>
            </Form>
          );
        }}
      </Formik>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        className={cx("Modal")}
        overlayClassName={cx("OverLay")}
      >
        <Result
          status="success"
          title="Successfully Order"
          extra={[
            <Button type="primary" key="console" onClick={handleBackHome}>
              Go Home
            </Button>,
            <Button key="buy" onClick={handleBackList}>
              Buy Again
            </Button>,
          ]}
        />
      </Modal>
    </>
  );
};

export default CheckoutForm;
