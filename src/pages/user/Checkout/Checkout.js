import { Link } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import Order from "../Cart/Order/Order";

const cx = classNames.bind(styles);
const Checkout = () => {
  const [isLogin] = useState(!localStorage.getItem("token"));
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <div className={cx("main-title")}>Checkout as Guest</div>
        {isLogin && (
          <div className={cx("sub-title")}>
            or{" "}
            <Link to={"/auth"} className={cx("sub-link")}>
              Sign in
            </Link>{" "}
            for faster checkout
          </div>
        )}
      </div>

      <div className={cx("container")}>
        <div className={cx("checkout")}>
          <div className={cx("checkout-title")}>Shipping To</div>
          <CheckoutForm />
        </div>

        <div className={cx("order")}>
          <Order />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
