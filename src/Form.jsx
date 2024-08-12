import React from "react";
import Medal from "./Medal";

const Form = (props) => {
	const { country, setCountry, countries, setCountries } = props.formProps;

	const inputStyle = { display: "flex", flexDirection: "column" };

	const addCountry = () => {
		const existingCountry = countries.find((c) => c.name === country.name);
		if (existingCountry) {
			alert("이미 등록된 국가입니다.");
		} else {
			setCountries([...countries, country]);
		}
	};
	const updateCountry = () => {
		const existingCountry = countries.find((c) => c.name === country.name);
		if (existingCountry) {
			const updatedCountries = countries.map((c) => {
				if (c.name === country.name) {
					return {
						...c,
						gold,
						silver,
						bronze,
					};
				} else {
					return c;
				}
			});
			setCountries(updatedCountries);
		} else {
			alert("등록되지 않은 국가입니다.");
		}
	};
	return (
		<div>
			<h1>2024 파리 올림픽</h1>
			<form
				className="input-group"
				onSubmit={(event) => {
					event.preventDefault();
					addCountry();
				}}
			>
				<div style={{ display: "flex" }}>
					<p style={inputStyle}>
						국가명
						<input
							type="text"
							placeholder="국가 입력"
							value={country.name}
							onChange={(e) => {
								setCountry({
									...country,
									name: e.target.value,
								});
							}}
						/>
					</p>
					<Medal
						color={"gold"}
						country={country}
						setCountry={setCountry}
					/>
					<Medal
						color={"silver"}
						country={country}
						setCountry={setCountry}
					/>
					<Medal
						color={"bronze"}
						country={country}
						setCountry={setCountry}
					/>
					<button type="submit">국가 추가</button>
					<button type="button" onClick={updateCountry}>
						업데이트
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
