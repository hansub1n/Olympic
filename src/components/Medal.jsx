import React from "react";

const Medal = (props) => {
	const inputContainerStyle = {
		display: "flex",
		flexDirection: "column",
		alignItem: "center",
		textAlign: "center",
		margin: "0",
		gap: "5px",
		fontWeight: "550",
	};
	const inputStyle = {
		height: "35px",
		boxSizing: "border-box",
		padding: "10px",
	};

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
		<p style={inputContainerStyle}>
			{title[color]}
			<input
				type="number"
				placeholder="0"
				style={inputStyle}
				value={country[color]}
				onChange={inputHandler}
			/>
		</p>
	);
};

export default Medal;
