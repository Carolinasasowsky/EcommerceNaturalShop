import React, { useState } from "react";
import { ShoppingCart, Heart, Menu } from "lucide-react";
import "./navbar.sass";
import logo from "../../assets/logo.png";
import Search from "../search/search";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="navbar">
			<div className="logo">
				<img src={logo} alt="OliviaSport Logo" />
			</div>

			<ul className={`nav-links ${menuOpen ? "open" : ""}`}>
				<li>Inicio</li>
				<li>Productos</li>
				<li>
					Favoritos
				</li>
				<li>
					<Search placeholder="Buscar..." />
				</li>
				<li className="cart">
					<ShoppingCart size={24} />
				</li>
			</ul>

			<div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
				<Menu size={28} />
			</div>
		</nav>
	);
}
