import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "antd";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
// --------------
import Button from "~/components/Button/Button";
import Loading from "~/components/Loading/Loading";
import productAPI from "~/api/user/productAPI";
import { updatefilterList } from "~/store/slices/productSlice";
import { concateString } from "~/ultils/config";

const cx = classNames.bind(styles);

function getItem(label, key, children) {
  return {
    key,
    children,
    label,
  };
}

const filterKey = ["sort", "aroma", "brand", "type", "price", "stock"];
const Sidebar = () => {
  let loading = false;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // Data's Sidebar
  const [sidebarList, setSidebarList] = useState([]);
  const productState = useSelector((state) => state.product);
  const { filterList } = productState;
  const current = Object.values(filterList);
  // get Data's Sidebar
  useEffect(() => {
    // call API to get Data's sidebar
    const fetchAPI = async () => {
      try {
        const response = await productAPI.getSidebar();
        let items = [
          getItem("Sort by", "sort", [
            getItem("A -> Z", "nac", ""),
            getItem("Z -> A", "ndc", ""),
            getItem("Price Low To High", "pac", ""),
            getItem("Price High To Low", "pdc", ""),
          ]),
          getItem(
            "Aroma",
            "aroma",
            response.aroma.map((item) => getItem(item, item.toLowerCase(), ""))
          ),
          getItem(
            "Brand",
            "brand",
            response.brand.map((item) => getItem(item, item.toLowerCase(), ""))
          ),
          getItem(
            "Type",
            "type",
            response.type.map((item) => getItem(item, item.toLowerCase(), ""))
          ),
          getItem("Price", "price", [
            getItem("100$ - 300$", "100-300", ""),
            getItem("300$ - 500$", "300-500", ""),
            getItem("Higher Than 500$", "500-1000", ""),
          ]),
          getItem("Stock", "stock", [getItem("Available", "0-1000", "")]),
        ];
        setSidebarList(items);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAPI();

    // get FilterList
    const getParam = (filterKey) => {
      let paramList = {};
      filterKey.forEach((item) => {
        if (searchParams.get(item) !== null) {
          paramList = { ...paramList, [item]: searchParams.get(item) };
        }
      });

      return paramList;
    };

    dispatch(updatefilterList(getParam(filterKey)));
  }, []);

  const onClick = (e) => {
    const action = updatefilterList({
      [e.keyPath[1]]: e.key,
    });
    dispatch(action);

    let newList = { ...filterList };
    if (filterList[e.keyPath[1]] === e.key) {
      delete newList[e.keyPath[1]];
    } else {
      newList = { ...newList, [e.keyPath[1]]: e.key };
    }

    const url = concateString(newList);
    navigate(`?${url}`);
  };

  return (
    <div className={cx("wrapper")}>
      {loading ? (
        <Loading className={cx("sidebar-load")} />
      ) : (
        <>
          <Menu
            onClick={onClick}
            selectedKeys={current}
            mode="inline"
            style={{
              flex: 1,
              fontSize: "1.5rem",
              borderRadius: "4px",
            }}
            items={sidebarList}
            className={cx("menu")}
          />
          {/* <Button className="btn-filter" onClick={handleFilter}>
            Filter{" "}
            <FontAwesomeIcon icon={faFilter} style={{ marginLeft: "8px" }} />
          </Button> */}
        </>
      )}
    </div>
  );
};

export default Sidebar;
