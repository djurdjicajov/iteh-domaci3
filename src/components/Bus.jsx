import React from "react";
import Card from "./Card";

function Bus({ cards, onRemove }) {
	return (
		<div>
			<h1>Uzete karte: </h1>
			{cards.map((card) => (
				<Card card={card} key={card.id} inBus={true} onRemove={onRemove} />
			))}
		</div>
	);
}

export default Bus;
