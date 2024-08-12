import React from "react";

const Medal = (props) => {
	const inputStyle = { display: "flex", flexDirection: "column" };
	const { color, country, setCountry } = props;
	const title = {
		gold: "금메달",
		silver: "은메달",
		bronze: "동메달",
	};

	return (
		<p style={inputStyle}>
			{title[color]}
			<input
				type="number"
				value={country[color]}
				onChange={(e) => {
					setCountry({
						...country,
						[color]: e.target.value,
					});
				}}
			/>
		</p>
	);
};

export default Medal;
