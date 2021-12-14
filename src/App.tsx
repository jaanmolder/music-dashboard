import React from "react";
import "./App.css";

import MusicDashboard from "./pages/music-dashboard";
// import { useDispatch } from "react-redux";

function App() {
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <MusicDashboard changeWheelHandler={null} />
    </div>
  );
}

export default App;
