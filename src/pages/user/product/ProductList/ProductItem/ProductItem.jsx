import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";

const cx = classNames.bind(styles);
const ProductItem = ({ data }) => {
  return (
    <a href={`products/${data._id}`} className={cx("wrapper")}>
      <img src={data.image} className={cx("product-img")} />
      <div className={cx("product-info")}>
        <div className={cx("product-name")}>{data.name}</div>
        <div className={cx("product-price")}>
          $<span>{`${data.price[0]}`}</span>
        </div>
      </div>
    </a>
  );
};

export default ProductItem;
