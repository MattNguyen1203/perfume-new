import styles from "./Mask.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Mask = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("video")}>
        <video
          src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2023/04/female-hands-unpacking-gift-box-and-taking-perfume-ART2PM2.m4v"
          alt=""
          loop
          muted
          autoPlay
        />
      </div>
    </div>
  );
};

export default Mask;
