import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = (props) => {
  const { children, onClick, className } = props;
  return (
    <button onClick={onClick} className={cx(className)}>
      {children}
    </button>
  );
};

export default Button;
