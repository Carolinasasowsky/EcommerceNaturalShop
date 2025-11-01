import React, { useState } from "react";
import Container from "../../components/home/container";
import Card from "../../components/home/card";
import items from "../../data/items";
import Search from "../../components/search/search";

export default function Buscador() {
	const [query, setQuery] = useState("");

	const filtered = items.filter((item) =>
		item.name.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<>
			<Search
				placeholder="Buscar productos..."
				onChange={(e) => setQuery(e.target.value)}
			/>
			<Container>
				{filtered.map((item) => (
					<Card key={item.id} item={item} />
				))}
			</Container>
		</>
	);
}
