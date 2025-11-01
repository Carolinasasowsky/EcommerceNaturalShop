import React from "react";
import { Facebook, Instagram } from "lucide-react";
import "./footer.sass";

export default function Footer() {
	return (
		<footer className="footer">
			<p>© 2025 NaturalShop</p>
			<div className="social-icons">
				<Facebook size={24} />
				<Instagram size={24} />
			</div>
		</footer>
	);
}
