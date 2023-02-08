import "./App.css";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import Bus from "./components/Bus";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Covid from "./components/Covid";

function App() {
	const [busNumber, setBusNumber] = useState(0);
	const [covidCasesDeath, setCovidCasesDeath] = useState(0);
	const [addedCards, setAddedCards] = useState([]);
	const [cards] = useState([
		{
			id: 1,
			name: "Subotica",
			image:
				"https://subotica024.rs/wp-content/uploads/2022/05/subotica024-rs-202205-1176-1536x864.jpg",
			description:
				"Naš najseverniji grad koji predstavlja spoj više nacija, kultura i umetnosti. Subotica se prvi put pominje 1391. pod latinskim imenom Zabatka. Godine 1526,—1527. Subotica je bila prestonica kratkotrajne srpske države samoproglašenog cara Jovana Nenada. Osmansko carstvo je vladalo gradom od 1542. do 1686, kada je Subotica postala posed Habzburške monarhije. Tokom osmanske uprave ime grada je bilo Sobotka. ",
			klasa: 1,
			inBus: false,
		},
		{
			id: 2,
			name: "Novi Sad",
			image:
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/6b/4b/85/caption.jpg?w=500&h=300&s=1&cx=2980&cy=1592&chk=v1_4c086a3f0079164b576b",
			description:
				"Novi Sad je evropska prestonica kulture. Poznata po prelepim građevinima i mirnoći. Domaćin mnogih festivala između kojih je i najpoznatiji Exit!",
			klasa: 1,
			inBus: false,
		},
		{
			id: 3,
			name: "Zlatibor",
			image:
				"https://www.wellness-spa.rs/wp-content/uploads/2022/12/zlatibor-skijanje-nova-godina.jpg",
			description:
				"Zlatibor je jedna od najpoznatijih napih planina! Pored šetnje u prirodi po obodu planine, nudi i nezaboravan noćni porovod.",
			klasa: 2,
			inBus: false,
		},
	]);

	function refreshFnc() {
		let newCards = cards.filter((g) => g.inBus === true);
		setAddedCards(newCards);
	}

	function setKlasa(id, klasa) {
		cards
			.filter((card) => card.id === id)
			.forEach((card) => (card.klasa = klasa));
	}

	function addCard(card) {
		cards
			.filter((g) => g.id === card.id)
			.filter((g) => g.inBus === false)
			.forEach((g) => {
				setBusNumber(busNumber + 1);
				g.inBus = true;
			});

		refreshFnc();
	}

	function removeCard(card) {
		cards
			.filter((g) => g.id === card.id)
			.forEach((g) => {
				g.inBus = false;
				setBusNumber(busNumber - 1);
			});
		refreshFnc();
	}

	return (
		<BrowserRouter className="App">
			<NavBar busNumber={busNumber} />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<h1>Izaberite lokaciju: </h1>
							<Cards
								cards={cards}
								onAdd={addCard}
								onRemove={removeCard}
								onSet={setKlasa}
							/>
						</>
					}
				></Route>
				<Route
					path="/bus"
					element={<Bus cards={addedCards} onRemove={removeCard} />}
				></Route>
			</Routes>
			<Covid
				setCovidCasesDeath={setCovidCasesDeath}
				covidCasesDeath={covidCasesDeath}
			/>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
