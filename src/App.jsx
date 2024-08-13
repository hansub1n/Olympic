import React from "react";
import { useState } from "react";
import "./App.css";
import Contents from "./Contents";
import Form from "./Form";

const App = () => {
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState({
		name: "",
		gold: "",
		silver: "",
		bronze: "",
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
