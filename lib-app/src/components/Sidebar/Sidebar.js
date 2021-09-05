import React from "react";

import Logo from "./Logo/Logo";
import LinkTo from "../common/LinkTo/LinkTo";

const Sidebar = () => {
	return (
		<nav className="sidebar">
			<Logo />
			<LinkTo name="Authors"/>
			<LinkTo name="Books"/>
		</nav>
	)
}

export default Sidebar;