import React, { FunctionComponent } from "react";
import style from "./header.module.css";

type HeaderTypes = {
  // changeWheelHandler: any;
};

const Header: FunctionComponent<HeaderTypes> = ({}) => {
  return (
    <>
      <div className={style.header}>
        <span className={style.mainText}>Music events</span>
        <input className={style.search} placeholder="Search for events" />
      </div>
    </>
  );
};

export default Header;
