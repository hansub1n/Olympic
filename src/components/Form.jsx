import React from "react";
import Medal from "./Medal";

const Form = (props) => {
	const inputGroupStyle = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: "20px",
		gap: "8px",
		alignItems: "flex-end",
	};

	const inputContaintersStyle = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "end",
		gap: "10px",
	};
	const inputContainerStyle = {
		display: "flex",
		flexDirection: "column",
		alignItem: "center",
		textAlign: "center",
		margin: "0",
		gap: "5px",
		fontWeight: "550",
	};

	const titleStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};
	const inputStyle = {
		height: "35px",
		boxSizing: "border-box",
		padding: "10px",
	};
	const buttonStyle = {
		height: "35px",
		boxSizing: "border-box",
		padding: "5px 15px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontWeight: "550",
	};

	const { country, setCountry, countries, setCountries } = props.formProps;

	const submitHandler = (event) => {
		event.preventDefault();
		addCountry();
	};

	const inputHandler = (e) => {
		setCountry({
			...country,
			name: e.target.value,
		});
	};

	const addCountry = () => {
		const existingCountry = countries.find((c) => c.name === country.name);
		if (country.name.trim() !== "") {
			if (existingCountry) {
				alert("이미 등록된 국가입니다.");
				return;
			} else {
				setCountries([...countries, country]);

				setCountry({
					name: "",
					gold: 0,
					silver: 0,
					bronze: 0,
				});
			}
		} else {
			alert("국가명을 입력하세요.");
		}
	};

	const updateCountry = () => {
		const existingCountry = countries.find((c) => c.name === country.name);
		if (country.name.trim() !== "") {
			if (existingCountry) {
				const updatedCountries = countries.map((c) => {
					if (c.name === country.name) {
						return {
							...c,
							gold: country.gold,
							silver: country.silver,
							bronze: country.bronze,
						};
					} else {
						return c;
					}
				});
				setCountries(updatedCountries);

				setCountry({
					name: "",
					gold: 0,
					silver: 0,
					bronze: 0,
				});
			} else {
				alert("등록되지 않은 국가입니다.");
				return;
			}
		} else {
			alert("국가명을 입력하세요.");
		}
	};

	return (
		<div>
			<h1 style={titleStyle}>2024 파리 올림픽</h1>
			<form onSubmit={submitHandler} style={inputGroupStyle}>
				<div style={inputContaintersStyle}>
					<p style={inputContainerStyle}>
						국가명
						<input
							type="text"
							placeholder="국가 입력"
							style={inputStyle}
							value={country.name}
							onChange={inputHandler}
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
				</div>
				<div
					style={{
						display: "flex",
						flexShrink: "0",
						gap: "10px",
						alignItems: "center",
					}}
				>
					<button type="submit" style={buttonStyle}>
						국가 추가
					</button>
					<button
						type="button"
						style={buttonStyle}
						onClick={updateCountry}
					>
						업데이트
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
