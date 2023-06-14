import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = (props) => {
  const { children, onClick, className, type } = props;

  return (
    <button onClick={onClick} className={cx(className)} type={type}>
      {children}
    </button>
  );
};

export default Button;
