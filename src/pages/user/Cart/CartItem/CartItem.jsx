import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import { ADD_ITEM, REMOVE_ITEM } from "~/ultils/constants";
import { handlePendingOrder } from "~/store/slices/orderSlice";

const cx = classNames.bind(styles);

const CartItem = ({ order, className }) => {
  const dispatch = useDispatch();
  const handleOrder = (productId, quantity, capacity, price, type) => {
    dispatch(
      handlePendingOrder({
        type: type,
        product: { productId, quantity, capacity, price },
      })
    );
  };

  return (
    <>
      {order.map((item, index) => {
        return (
          <div className={cx("cart-item", className)} key={index}>
            <img src={item.image} className={cx("item-img")} />
            <div className={cx("main-item")}>
              <div className={cx("info")}>
                <a
                  href={`products/${item.productId}`}
                  className={cx("item-name")}
                >
                  {item.name}
                </a>
                <span
                  className={cx("item-capacity")}
                >{`${item.capacity}ml`}</span>
                <span className={cx("item-price")}>{`$${item.price}`}</span>
              </div>
              <div className={cx("item-quantity")}>
                <div className={cx("qty")}>
                  <div className={cx("title")}>Quantity:</div>
                  <div className={cx("btn-qty")}>
                    <div
                      className={cx(
                        "btn-minus",
                        item.quantity === 1 ? "disabled" : ""
                      )}
                      onClick={
                        item.quantity > 1
                          ? () =>
                              handleOrder(
                                item.productId,
                                -1,
                                item.capacity,
                                item.price,
                                ADD_ITEM
                              )
                          : null
                      }
                    >
                      -
                    </div>
                    <span>{item.quantity}</span>
                    <div
                      className={cx(
                        "btn-plus",
                        item.quantity === 9 ? "disabled" : ""
                      )}
                      onClick={
                        item.quantity < 9
                          ? () =>
                              handleOrder(
                                item.productId,
                                1,
                                item.capacity,
                                item.price,
                                ADD_ITEM
                              )
                          : null
                      }
                    >
                      +
                    </div>
                  </div>
                </div>
                <div
                  className={cx("btn-remove")}
                  onClick={() =>
                    handleOrder(
                      item.productId,
                      item.quantity,
                      item.capacity,
                      item.price,
                      REMOVE_ITEM
                    )
                  }
                >
                  Remove
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItem;
