import { useNavigate } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const cx = classNames.bind(styles);

const Nav = ({ onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePress = (e) => {
    if (e.key === "Enter") {
      navigate(`/products?name=${inputValue}`);
      window.location.reload();
    }
  };

  const handleRoute = () => {
    navigate(`/stores`);
    window.location.reload();
  };
  return (
    <div className={cx("wrapper")}>
      <div onClick={onClose} className={cx("btn-close")}>
        X
      </div>
      <div className={cx("container")}>
        {/* Main Menu */}
        <div className={cx("filter")}>
          <div className={cx("nav-item", "item-filter")}>
            <div className={cx("item-title")}>FEEL THE LOVE</div>
            <div className={cx("item-content")}>
              <a href="/products?type=men" className={cx("link")}>
                MEN
              </a>
              <span style={{ fontSize: "9rem" }}>&nbsp;&&nbsp;</span>
              <a href="/products?type=women" className={cx("link")}>
                WOMEN
              </a>
              <br />
              <a href="/products?type=unisex" className={cx("link")}>
                UNISEX
              </a>
            </div>
          </div>
          <a href="/cart" className={cx("cart")}>
            YOUR CART
          </a>
        </div>
        <div className={cx("nav-item", "item-search")}>
          <div className={cx("item-title")}>YOU LOOKING FOR...</div>
          <div className={cx("item-content")}>
            <input
              placeholder="Enter Name"
              onKeyPress={handlePress}
              onChange={handleChange}
              value={inputValue}
            />
          </div>
        </div>
        <div className={cx("nav-item", "item-contact")}>
          <div className={cx("item-title")}>ANY QUESTION?</div>
          <div className={cx("item-content", "contact")}>
            <div className={cx("link")} onClick={handleRoute}>
              CONTACT US
            </div>
            <div className={cx("icon-container")}>
              <div className={cx("icon", "link")}>
                {" "}
                <FacebookOutlined />{" "}
              </div>
              <div className={cx("icon", "link")}>
                {" "}
                <InstagramOutlined />
              </div>
              <div className={cx("icon", "link")}>
                {" "}
                <TwitterOutlined />{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Credit */}
        <div className={cx("credit")}>
          <div>BTMM © 2023 NVH. All rights reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
