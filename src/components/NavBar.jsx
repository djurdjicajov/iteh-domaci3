import React from "react";
import { TbBus } from "react-icons/tb";
import { Link } from "react-router-dom";

function NavBar({ busNumber }) {
	return (
		<div className="navBar">
			<Link to="/" className="home-button">
				Lokacije
			</Link>
			<Link to="/bus" className="bus-button">
				Izabrane karte
			</Link>
			<p className="card-num">{busNumber}</p>
		</div>
	);
}

export default NavBar;
