import React from "react";
import Container from "../../components/home/container";
import Card from "../../components/home/card";
import items from "../../data/items";

export default function Home() {
	return (
		<Container>
			{items.map((item) => (
				<Card key={item.id} item={item} />
			))}
		</Container>
	);
}
