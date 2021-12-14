import React, { FunctionComponent, useEffect, useState } from "react";
import style from "./music-dashboard.module.css";
import { getMusicEvents } from "../actions";
import Header from "./components/header";
import Footer from "./components/footer";
// import {useDispatch} from "react-redux";

type MusicDashboardTypes = {
  changeWheelHandler: any;
};

const MusicDashboard: FunctionComponent<MusicDashboardTypes> = ({
  changeWheelHandler,
}) => {
  // const [data, setData] = useState({});
  // const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      const getData = await getMusicEvents();
      console.log(getData);
    })();
  }, []);

  return (
    <>
      <Header />

      <Footer />
    </>
  );
};

export default MusicDashboard;
