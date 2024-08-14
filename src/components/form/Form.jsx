import React from "react";
import Medal from "./Medal";
import "./Form.css";

const Form = (props) => {
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
		if (!country.name.trim()) {
			alert("국가명을 입력하세요.");
			return;
		}

		const existingCountry = countries.find((c) => c.name === country.name);
		if (!existingCountry) {
			setCountries([...countries, country]);

			setCountry({
				name: "",
				gold: 0,
				silver: 0,
				bronze: 0,
			});
		} else {
			alert("이미 등록된 국가입니다.");
			return;
		}
	};

	const updateCountry = () => {
		const existingCountry = countries.find((c) => c.name === country.name);
		if (!country.name.trim()) {
			alert("국가명을 입력하세요.");
			return;
		}

		if (!existingCountry) {
			alert("등록되지 않은 국가입니다.");
			return;
		} else {
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
		}
	};

	return (
		<div>
			<h1 className="form-title">2024 파리 올림픽</h1>
			<form onSubmit={submitHandler} className="form-input-group">
				<div className="form-input-containers">
					<p className="form-input-container">
						국가명
						<input
							type="text"
							placeholder="국가 입력"
							className="form-input"
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
				<div className="form-button-container">
					<button type="submit" className="form-button">
						국가 추가
					</button>
					<button
						className="form-button"
						type="button"
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
