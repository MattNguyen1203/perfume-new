import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Footer = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("item")}>
        <div className={cx("title")}>Info</div>
        <div>Xuan Dieu, Tay Ho, Ha Noi</div>
        <div>contactus@Olivia.com</div>
        <div>+84 223 1997</div>
      </div>
      <div className={cx("item", "open")}>
        <div className={cx("title")}>Open Time</div>
        <div>11:00 - 22:00</div>
        <div>From Monday to Friday</div>
      </div>
      <div className={cx("item")}>
        <div className={cx("title")}>Social Media</div>
        <div>@Olivia&Co</div>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default Footer;
