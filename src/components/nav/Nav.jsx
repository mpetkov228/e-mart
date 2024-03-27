import { Link } from "react-router-dom";

function Nav() {
	return (
		<div className="navbar">
			<div className="logo">E-MART</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="shop">Shop</Link></li>
        <li><Link to="cart">Cart</Link></li>
      </ul>
		</div>
	);

}

export default Nav;