import React from "react";

function Covid({ setCovidCasesDeath, covidCasesDeath }) {
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "14fe13654fmshb345f2bfa45cc64p125164jsn86817c451dd7",
			"X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		},
	};

	function fetchData() {
		fetch(
			"https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Serbia",
			options
		)
			.then((response) => response.json())
			.then((response) => setCovidCasesDeath(response.data.deaths))
			.then((response) => console.log(response))
			.catch((err) => console.error(err));
	}

	return (
		<div className="covid">
			<h1>
				{fetchData()}Mi brinemo o vašem zdravlju!{" "}
				<div className="deaths">{covidCasesDeath}</div> Ukupan broj umrlih:{" "}
			</h1>
			<h1>
				Budite pažljivi! Čuvajte svoje zdravlje! Maske su obavezne u toku
				vožnje!
			</h1>
		</div>
	);
}

export default Covid;
