import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";

import Button from "~/components/Button/Button";
import getIntro, { introList, subLink } from "./components/config";
import founder from "../Home/components/image/founder.png";

const cx = classNames.bind(styles);
const Home = () => {
  const navigate = useNavigate;
  return (
    <div className={cx("wrapper")}>
      {/* Banner */}

      <div className={cx("banner")}>
        <div className={cx("banner-title")}>
          <div className={cx("banner-name")}>Perfume for the Perfection</div>
          <div className={cx("banner-line")}>Much More Than Perfume</div>
          <div className={cx("banner-line-small")}>
            {" "}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit.{" "}
          </div>
          <div className={cx("banner-btn")}>
            <Button
              className={cx("btn-shop")}
              onClick={() => navigate("/products")}
            >
              {" "}
              Buy Now
            </Button>
            <Button
              className={cx("btn-shop")}
              onClick={() => navigate("/stores")}
            >
              {" "}
              See More
            </Button>
          </div>
        </div>
        <div className={cx("banner-img")}>
          <img
            src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/leave-2U8ZUJ.png"
            alt=""
          />
        </div>
      </div>

      {/* Description */}
      <div className={cx("description")}>
        <div className={cx("image")}>
          <img
            src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/23-ESJ32AL-1024x1024.png"
            alt=""
          />
        </div>
        <div className={cx("content")}>
          <div className={cx("title")}>About Our Store</div>
          <div className={cx("sub-title")}> Welcome to Me</div>
          <div className={cx("main-content")}>
            {" "}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus,
            nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis
            mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi
            erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis,
            est non commodo luctus, nisi erat porttitor ligula, eget lacinia
            odio sem nec elit.
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className={cx("search")}>
        <div className={cx("label")}>Looking for...</div>
        <div className={cx("search-name")}>
          <input
            placeholder="Enter the name"
            // onKeyPress={handlePress}
            // onChange={handleChange}
            // value={inputValue}
          />
        </div>
      </div>

      {/* Advantage */}
      <div className={cx("intro")}>
        {introList.map((item, index) =>
          getIntro(item.img, item.p, item.background, index)
        )}
      </div>

      {/* Link to Page */}
      <div className={cx("subLink")}>
        {subLink.map((item, index) => {
          return (
            <div
              className={cx("subLink-item")}
              key={index}
              style={{ flexDirection: item.style.flexDirection }}
            >
              <div
                className={cx("item-img")}
                style={{
                  backgroundImage: `url(${item.background})`,
                  margin: item.style.margỉn,
                }}
              >
                <img src={item.img} alt="" style={{ left: item.imgLeft }} />
              </div>
              <div className={cx("item-main")}>
                <div className={cx("item-title")}>{item.title}</div>
                <div className={cx("item-subTitle")}>{item.subTitle}</div>
                <div className={cx("item-content")}>{item.content}</div>
                <div className={cx("item-btn")}>
                  <Button onClick={() => navigate(item.url)}> Buy Now</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Founder */}
      <div className={cx("founder")}>
        <div className={cx("founder-img")}>
          <img src={founder} alt="" />
        </div>
        <div className={cx("founder-info")}>
          <div className={cx("founder-title")}>Words from our founder</div>
          <div className={cx("founder-name")}>Huong Nguyen</div>
          <div className={cx("founder-content")}>
            <div className={cx("main-content")}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
              <br></br>
              <div>
                Maecenas faucibus mollis interdum. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur
                purus sit amet fermentum. Nulla vitae elit libero.
              </div>
            </div>
            <div className={cx("main-content", "right")}>
              Aenean lacinia bibendum nulla sed consectetur. Cras mattis
              consectetur purus sit amet fermentum. Fusce dapibus, tellus ac
              cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
              justo sit amet risus. Nulla vitae elit libero, a pharetra augue.
              Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className={cx("founder-sign-img")}>
            <img
              src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/Antonin-Scalia-Signature-2016021501.png"
              alt=""
            />
          </div>
          <div className={cx("founder-sign")}>
            {" "}
            Huong Nguyen, Owner Of Olivia & Co{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
