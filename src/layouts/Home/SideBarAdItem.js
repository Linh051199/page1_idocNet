import React from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function SideBarAdItem({ src, content }) {
  return (
    <div className={cx("sideBarAdItemContainer")}>
      <img src={src} alt="img" />
      <div className={cx("sideBarAdItemContent")}>{content}</div>
    </div>
  );
}

export default SideBarAdItem;
