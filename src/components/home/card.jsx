import React from "react";
import "./card.sass";

export default function Card({ item }) {
	return (
		<div className="card">
			<img src={item.image} alt={item.name} />
			<h3>{item.name}</h3>
			<p>${item.price}</p>
		</div>
	);
}
