import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
	return (
		<div className="navbar">
			<div className="logo">
        <img src="../../../public/logo.png" alt="logo" />
      </div>
      <ul className="navbarLinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="shop">Shop</Link></li>
        <li><Link to="cart">Cart</Link></li>
      </ul>
		</div>
	);

}

export default Nav;