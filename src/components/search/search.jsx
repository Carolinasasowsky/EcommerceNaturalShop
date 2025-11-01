import React from "react";
import { Search as SearchIcon } from "lucide-react";
import "./Search.sass";

export default function Search({ placeholder }) {
	return (
		<div className="search-bar">
			<input type="text" placeholder={placeholder || "Buscar..."} />
			<SearchIcon size={20} />
		</div>
	);
}
