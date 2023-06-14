import React, { useState } from "react";
import Mask from "./Mask/Mask";
import Login from "./Login/Login";
import Register from "./Register/Register";
import styles from "./Auth.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-container")}>
        {isLogin ? <Login /> : <Register />}
        <div onClick={handleToggle} className={cx("footer")}>
          {isLogin ? "Register" : "Login"}
        </div>
      </div>
      <Mask />
    </div>
  );
};

export default Auth;
