import React, { FunctionComponent } from "react";
import style from "./menu.module.css";

type MenuTypes = {
  genres: any;
};

const Menu: FunctionComponent<MenuTypes> = ({ genres }) => {
  let index = 0;

  return (
    <>
      <div className={style.body}>
        {genres.map((i: any) => {
          index = index + 1;
          let tabStyle = style.tab;
          let btnStyle = style.closeButtonStyle;
          // if (i.active) {
          //     tabStyle = style.tabActive;
          //     btnStyle = style.closeButtonStyleActive;
          // }

          console.log(i.index);
          if (index <= 3) {
            return (
              <div className={style.tabContainer} key={i.id}>
                <div
                  className={tabStyle}
                  /*onClick={() => {
                                    if (!i.active) {
                                        clickTabHandler(i.link);
                                    }
                                }}*/
                >
                  <span className={style.tabText}>{i.name}</span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Menu;
