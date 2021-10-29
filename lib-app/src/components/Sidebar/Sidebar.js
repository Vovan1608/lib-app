import React from "react";

import { Logo } from "./Logo";
import { LinkTo } from "../common";

const Sidebar = () => (
	<nav className="sidebar">
		<Logo />
		<LinkTo name="Authors"/>
		<LinkTo name="Books"/>
	</nav>
);

export { Sidebar };