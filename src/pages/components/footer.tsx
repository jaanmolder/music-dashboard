import React, { FunctionComponent } from "react";
import style from "./header.module.css";

type FooterTypes = {
    // changeWheelHandler: any;
};

const Footer: FunctionComponent<FooterTypes> = ({}) => {
    return (
        <>
            <div className={style.footer}>
                <span >Fitek 2020</span>

            </div>
        </>
    );
};

export default Footer;
