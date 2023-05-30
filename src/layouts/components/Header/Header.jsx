import { Drawer } from "antd";
import { Dropdown } from "antd";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const Header = () => {
  const navigate = useNavigate();
  // const showDrawer = () => {
  //     setOpen(true);
  //   };
  //   const onClose = () => {
  //     setOpen(false);
  //   };

  const handleRoute = () => {
    navigate("");
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <div>
          {/* <Menu /> */}
          Nav Icon
        </div>
        <div onClick={handleRoute} className={cx("header-logo")}>
          <img
            src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/olivia-dark.png"
            alt="Perfume Logo, product list anwar fragnances"
          />
        </div>

        <div>User</div>
        {/* <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          arrow
        >
          <div className={cx("avatar")}>{logo}</div>
        </Dropdown> */}
      </div>

      {/* <Drawer
        width="100vw"
        placement="right"
        onClose={onClose}
        open={open}
        closable={false}
        className={cx("drawer")}
      >
        <Nav onClose={onClose} />
      </Drawer> */}
    </>
  );
};

export default Header;
