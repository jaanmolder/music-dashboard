import React, { FunctionComponent, useEffect, useState } from "react";
import style from "./music-dashboard.module.css";
import { getMusicEvents, getMusicGenres } from "../actions";
import Header from "./components/header";
import Footer from "./components/footer";
import EventDashboard from "./components/event-dashboard";
// import {useDispatch} from "react-redux";

type MusicDashboardTypes = {
  changeWheelHandler: any;
};

const MusicDashboard: FunctionComponent<MusicDashboardTypes> = ({
  changeWheelHandler,
}) => {
  const [events, setEvents] = useState([]);
  const [genres, setGenres] = useState([]);
  // const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      const getEvents = await getMusicEvents();
      setEvents(getEvents._embedded.events);

      try {
        const getGenres = await getMusicGenres();
        setGenres(getGenres.segment._embedded.genres);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(events);
  console.log(genres);

  return (
    <>
      <Header genres={genres} />
      <EventDashboard events={events} />
      <Footer />
    </>
  );
};

export default MusicDashboard;
