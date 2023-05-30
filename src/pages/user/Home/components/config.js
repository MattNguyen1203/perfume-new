import classNames from "classnames/bind";
import styles from "../Home.module.scss";
const cx = classNames.bind(styles);

export const introList = [
  {
    img: "https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/5-ESJ32AL.png",
    p: "Money Back Guarantee",
    background:
      "https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/shape8-TJ3H4MU.png",
  },
  {
    img: "https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/2-ESJ32AL.png",
    p: "Fast Delivery",
    background:
      "https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/shape27-TJ3H4MU.png",
  },
  {
    img: "https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/11-ESJ32AL.png",
    p: "Gift-Wrapped Packaging",
    background:
      "https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/shape10-TJ3H4MU.png",
  },
  {
    img: "https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/24-ESJ32AL.png",
    p: "Free Ship Worldwide",
    background:
      "https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/shape17-TJ3H4MU.png",
  },
];

export const subLink = [
  {
    title: "Men Perfume",
    subTitle: "What Makes A Man Charming",
    content:
      "Duis mollis, est non commodo luctus, nisi erat porttitor ligula,eget lacinia odio sem nec elit",
    url: "/products?type=men",
    img: "https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/S8KH8AE.jpg",
    background:
      "https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/12-MCH4223.png",
    style: {
      flexDirection: "row",
      margỉn: "0 0 0 -15%",
    },
    imgLeft: "80%",
  },
  {
    title: "Women Perfume",
    subTitle: "What Makes A Woman Beatiful",
    content:
      "Duis mollis, est non commodo luctus, nisi erat porttitor ligula,eget lacinia odio sem nec elit",
    url: "/products?type=women",
    img: "https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/perfume-mockup-01.jpg",
    background:
      "https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/11-MCH4223.png",
    style: {
      flexDirection: "row-reverse",
      margỉn: "0 -15% 0 0 ",
    },
    imgLeft: "-40%",
  },
];

function getIntro(img, p, background, index) {
  return (
    <div className={cx("intro-layout")} key={index}>
      <div
        className={cx("intro-img")}
        style={{ backgroundImage: `url(${background})` }}
      >
        <img src={img} alt={p} />
      </div>
      <div className={cx("intro-info")}>{p}</div>
    </div>
  );
}

export default getIntro;
