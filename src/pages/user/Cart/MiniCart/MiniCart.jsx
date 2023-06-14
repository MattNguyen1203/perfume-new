import styles from "./MiniCart.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "~/components/Loading/Loading";
import CartItem from "../CartItem/CartItem";

const cx = classNames.bind(styles);
const MiniCart = () => {
  // Get selected prd

  const { list, totalQty, totalPayment, isLoading } = useSelector(
    (state) => state.order
  );

  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/cart");
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("list-item")}>
        {isLoading ? <Loading /> : <CartItem order={list} />}
      </div>

      <div className={cx("payment")}>
        <div className={cx("total")}>
          <div className={cx("total-qty")}>
            <span className={cx("title")}>Subtotal</span>
            <span>{`${totalQty} items`}</span>
          </div>
          <div className={cx("total-payment")}>{`$${totalPayment}`}</div>
        </div>
        <div className={cx("btn-to-cart")} onClick={handleRoute}>
          Review + Checkout
        </div>
        <div className={cx("note")}>
          Shipping & Taxes Calculated at Checkout
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
