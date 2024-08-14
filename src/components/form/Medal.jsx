import React from "react";
import "./Form.css";

const Medal = (props) => {
	const { color, country, setCountry } = props;
	const title = {
		gold: "금메달",
		silver: "은메달",
		bronze: "동메달",
	};

	const inputHandler = (e) => {
		setCountry({
			...country,
			[color]: Number(e.target.value),
		});
	};

	return (
		<p className="form-input-container">
			{title[color]}
			<input
				type="number"
				placeholder="0"
				className="form-input"
				value={country[color]}
				onChange={inputHandler}
			/>
		</p>
	);
};

export default Medal;
