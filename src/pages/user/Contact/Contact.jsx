import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { data } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Contact = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>Our Stores</div>
      <div className={cx("container")}>
        {data.map((item, index) => {
          return (
            <div className={cx("card")} key={index}>
              <img className={cx("shop-img")} src={item.img} />
              <div className={cx("shop-info")}>
                <div className={cx("name")}>{item.name}</div>
                <div className={cx("address")}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className={cx("icon")}
                  />
                  {item.address}
                </div>
                <div className={cx("phone")}>
                  <FontAwesomeIcon icon={faPhone} className={cx("icon")} />
                  {item.phone}
                </div>
                <div
                  className={cx("opening-time")}
                >{`Opening Time: ${item.openingTime}`}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
