import Loading from "~/components/Loading/Loading";
import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Order from "./Order/Order";

const cx = classNames.bind(styles);
const Cart = () => {
  const { list, totalQty } = useSelector((state) => state.order);

  return (
    <>
      {!list ? (
        <Loading />
      ) : (
        <div className={cx("wrapper")}>
          <div className={cx("note")}>Free shipping on orders of $75+</div>
          <div className={cx("container")}>
            <div className={cx("product-info")}>
              <div className={cx("header")}>
                <h2>Your Cart</h2>
                <span>{`(${totalQty} items)`}</span>
              </div>

              <div className={cx("list-item")}>
                <CartItem order={list} className={cx("big-size")} />
              </div>
            </div>

            <div className={cx("order")}>
              <Order />
              <Link to={"/products"} className={cx("btn-back")}>
                Continue Shopping
              </Link>
              <Link to={"/checkout"} className={cx("btn-checkout")}>
                Go To Checkout
              </Link>

              <div className={cx("sub-note")}>
                <div>100% Authentic</div>
                <div>Need Help? Call Customer Support 866.513.0513</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
