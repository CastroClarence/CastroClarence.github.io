import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./Nav"
import Hero from "./Hero"
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {TypeWriter} from 'react-simple-typewriter'

export default function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
}
