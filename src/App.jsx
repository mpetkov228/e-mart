import { Outlet } from "react-router-dom";

import Nav from "./components/nav/Nav";
import "./App.css";

function App() {

  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
