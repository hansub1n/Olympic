import React from "react";
import { useState } from "react";
import "./App.css";
import Contents from "./components/Contents";
import Form from "./components/Form";

const App = () => {
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState({
		name: "",
		gold: 0,
		silver: 0,
		bronze: 0,
	});

	const formProps = {
		country: country,
		setCountry: setCountry,
		countries: countries,
		setCountries: setCountries,
	};
	const contentsProps = {
		countries: countries,
		setCountries: setCountries,
	};

	return (
		<div className="container">
			<Form formProps={formProps} />
			<Contents contentsProps={contentsProps} />
		</div>
	);
};

export default App;
