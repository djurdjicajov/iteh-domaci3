import React from "react";
import { useState, useEffect } from "react";

function Footer() {
	//dodavanje sata
	const [time, setTime] = useState("");
	function formatTime(val) {
		if (val < 10) {
			return 0;
		} else {
			return "";
		}
	}

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);

		return function cleanup() {
			clearInterval(timerID);
		};
	});

	function tick() {
		const d = new Date();
		const h = d.getHours();
		const m = d.getMinutes();
		const s = d.getSeconds();

		setTime(
			formatTime(h) + h + ":" + formatTime(m) + m + ":" + formatTime(s) + s
		);
	}
	return (
		<div className="footer">
			<h1> {time}</h1>
		</div>
	);
}

export default Footer;
