import React from "react";
import { useState } from "react";

function Card({ card, onAdd, onRemove, onSet, inBus }) {
	let [klasa, setKlasa] = useState(null);

	function set(val) {
		setKlasa(val.target.value);
	}

	return (
		<div className="card">
			<img className="card-img" src={card.image} alt={card.name}></img>
			<div className="card-body">
				<h1 className="card-name">{card.name}</h1>
				<p className="card-description">{card.description}</p>
			</div>
			{inBus === false ? (
				<button className="btnAdd" onClick={() => onAdd(card)}>
					Add card
				</button>
			) : (
				<button className="btnRemove" onClick={() => onRemove(card)}>
					Remove card
				</button>
			)}
			{inBus === true ? (
				<>
					<p className="text">Izaberite klasu: {card.klasa}</p>
				</>
			) : (
				<div className="stringProps">
					<label htmlFor="string-sizes">Izaberite klasu</label>
					<select name="string-sizes" id="string-sizes" onChange={set}>
						<option value="1" onChange={set}>
							1
						</option>
						<option value="2" onChange={set}>
							2
						</option>
						<option value="3" onChange={set}>
							3
						</option>
					</select>
					{/* <p>String size:</p>
          <input className="txtKlasa" type="text" onChange={set} />{" "} */}
					<button className="btnSubmit" onClick={() => onSet(card.id, klasa)}>
						Submit
					</button>
				</div>
			)}
		</div>
	);
}

export default Card;
