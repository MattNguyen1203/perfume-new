import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={cx("container")}>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
