import React, { FunctionComponent } from "react";
import style from "./event-dashboard.module.css";

type EventDashboard = {
  events: any;
};

const EventDashboard: FunctionComponent<EventDashboard> = ({ events }) => {
  let index = 0;

  return (
    <>
      <div className={style.wrapper}>
        {events.map((i: any) => {
          index = index + 1;

          // console.log(i.name);
          // console.log(i.url);

          return (
            <div className={style.dashContainer} key={i.id}>
              {/*<span className={style.tabText}>{i.name}</span>*/}
              <img
                src={i.images[0].url}
                alt={i.name}
                className={style.dashImage}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EventDashboard;
