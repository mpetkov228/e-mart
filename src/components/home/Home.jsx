import { useNavigate } from "react-router-dom";

import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home bg">
      <div className="callToActionHome">
        <h1 className="homeHeading">New Inventory</h1>
        <button onClick={() => navigate("shop")} className="shopNowBtn">Shop now</button>
      </div>
    </div>
  );
}

export default Home;