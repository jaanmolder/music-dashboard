import React, { FunctionComponent } from "react";
import style from "./event-dashboard.module.css";

type MenuTypes = {
  events: any;
};

const EventDashboard: FunctionComponent<MenuTypes> = ({ events }) => {
  let index = 0;

  return (
    <>
      <div className={style.body}>
        {events.map((i: any) => {
          index = index + 1;

          // console.log(i.name);
          // console.log(i.url);

          return (
            <div className={style.dashContainer} key={i.id}>
              <div
                className={style.tab}
                /*onClick={() => {
                                                      if (!i.active) {
                                                          clickTabHandler(i.link);
                                                      }
                                                  }}*/
              >
                {/*<span className={style.tabText}>{i.name}</span>*/}
                <img
                  src={i.images[0].url}
                  alt={i.name}
                  className={style.dashImage}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EventDashboard;
