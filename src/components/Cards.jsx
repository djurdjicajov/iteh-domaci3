import React from "react";
import Card from "./Card";

function Cards({ cards, onAdd, onRemove, onSet }) {
	return (
		<div>
			{cards.map((card) => (
				<Card
					card={card}
					key={card.id}
					onAdd={onAdd}
					onRemove={onRemove}
					onSet={onSet}
					inBus={false}
				/>
			))}
		</div>
	);
}

export default Cards;
