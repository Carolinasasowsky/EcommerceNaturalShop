import React from "react";
import Container from "../../components/home/container";
import Card from "../../components/home/card";
import items from "../../data/items";

export default function Favoritos() {
	const favoritos = items.slice(0, 2);
	return (
		<Container>
			{favoritos.map((item) => (
				<Card key={item.id} item={item} />
			))}
		</Container>
	);
}
