import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu/Menu";
import Button from "~/components/Button/Button";
import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import { Drawer } from "antd";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const handleRoute = (url) => {
    navigate(url);
  };

  // Open Nav bar
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  // Css header when scroll
  useEffect(() => {
    const handleScroll = (e) => {
      window.pageYOffset > 0 ? setIsScroll(true) : setIsScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className={cx("wrapper", isScroll ? "scrolled" : "")}>
        <div onClick={showDrawer}>
          <Menu />
        </div>
        <div onClick={() => handleRoute("/")} className={cx("header-logo")}>
          <img
            src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/olivia-dark.png"
            alt="Perfume Logo, product list anwar fragnances"
          />
        </div>
        <div className={cx("auth-container")}>
          {isLoggedIn ? (
            <Button className="btn-auth" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button className="btn-auth" onClick={() => handleRoute("/auth")}>
              Login
            </Button>
          )}

          <div className={cx("user")}>User</div>
        </div>
      </div>

      <Drawer
        width="100vw"
        placement="right"
        onClose={onClose}
        open={open}
        closable={false}
        className={cx("drawer")}
      >
        <Nav onClose={onClose} />
      </Drawer>
    </>
  );
};

export default Header;
