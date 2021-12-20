import React, { FunctionComponent } from "react";
import style from "./footer.module.css";

type FooterTypes = {};

const Footer: FunctionComponent<FooterTypes> = () => {
  return (
    <>
      <div className={style.footer}>
        <p>Fitek 2020</p>
      </div>
    </>
  );
};

export default Footer;
