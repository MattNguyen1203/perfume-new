import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductList.module.scss";
import classNames from "classnames/bind";
// -------------------------------------------
import { concateString } from "~/ultils/config";
import { getProductList } from "~/store/slices/productSlice";
import Sidebar from "~/layouts/components/Sidebar/Sidebar";
import NotFound from "~/components/NotFound/NotFound";
import Loading from "~/components/Loading/Loading";
import ProductItem from "./ProductItem/ProductItem";
import Pagination from "~/components/Pagination/Pagination";

const cx = classNames.bind(styles);
const ProductList = () => {
  const product = useSelector((state) => state.product);
  const { productList, filterList, isLoading } = product;
  const { list, totalPage } = productList;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // Active page and filter field
  const [activePage, setActivePage] = useState(searchParams.get("page") || 1);
  // Call API list
  useEffect(() => {
    const filterKey = [
      "sort",
      "aroma",
      "brand",
      "type",
      "price",
      "stock",
      "page",
      "name",
    ];
    const getParam = (filterKey) => {
      let paramList = {};
      filterKey.forEach((item) => {
        if (searchParams.get(item) !== null) {
          paramList = { ...paramList, [item]: searchParams.get(item) };
        }
      });

      if (paramList.page === undefined) {
        return { ...paramList, page: 1 };
      } else {
        return paramList;
      }
    };
    dispatch(getProductList(getParam(filterKey)));

    setActivePage(searchParams.get("page") || 1);
  }, [filterList, activePage]);

  const handleActivePage = (page) => {
    setActivePage(page);
    let url = concateString({ ...filterList, page });
    navigate(`?${url}`);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("banner")}>
        <img
          src="https://cdn.create.vista.com/api/media/medium/647481922/stock-photo-transparent-bottle-perfume-pink-background?token="
          alt=""
        />
        <img
          src="https://cdn.create.vista.com/api/media/medium/228009566/stock-photo-perfume-bottle-light-pink-floral?token="
          alt=""
        />
      </div>

      {/* Link */}

      <div className={cx("title")}>
        <span>Fragrance</span>
        <span className={cx("sub-title")}>{` (${list.length} items)`}</span>
      </div>

      {/* Main */}
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>
          {isLoading ? (
            <Loading className={cx("loader-list")} />
          ) : list.length !== 0 ? (
            <div className={cx("list-product")}>
              {list.map((item, index) => {
                return <ProductItem key={index} data={item} />;
              })}
            </div>
          ) : (
            <NotFound />
          )}

          {totalPage > 1 && (
            <Pagination
              amountOfPage={totalPage}
              className={cx("pagination")}
              onClick={handleActivePage}
              activePage={activePage || 1}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
