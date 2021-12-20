import React, { FunctionComponent } from "react";
import style from "./header.module.css";
import Menu from "./menu";

type HeaderTypes = {
  genres: any;
};

const Header: FunctionComponent<HeaderTypes> = ({ genres }) => {
  return (
    <>
      <div className={style.header}>
        <span className={style.mainText}>Music events</span>
        <input className={style.search} placeholder="Search for events" />
        <Menu genres={genres} />
      </div>
    </>
  );
};

export default Header;
