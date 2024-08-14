import React from "react";
import "./Contents.css";

const Contents = (props) => {
	const { countries, setCountries } = props.contentsProps;

	const sortedCountries = [...countries].sort((a, b) => {
		if (b.gold !== a.gold) {
			return b.gold - a.gold;
		}
		if (b.silver !== a.silver) {
			return b.silver - a.silver;
		}
		if (b.bronze !== a.bronze) {
			return b.bronze - a.bronze;
		}
	});

	const deleteHandler = (c) => {
		const filteredItems = countries.filter(
			(selectiedCountry) => selectiedCountry.name !== c.name
		);
		setCountries(filteredItems);
	};

	const trHandler = sortedCountries.map((c, index) => (
		<tr key={index}>
			<td>{c.name}</td>
			<td>{c.gold}</td>
			<td>{c.silver}</td>
			<td>{c.bronze}</td>
			<td>
				<button onClick={() => deleteHandler(c)}>삭제</button>
			</td>
		</tr>
	));

	if (countries.length === 0) {
		return (
			<div>
				<p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
			</div>
		);
	} else {
		return (
			<div className="table-container">
				<table className="table">
					<thead>
						<tr>
							<th>국가명</th>
							<th>금메달</th>
							<th>은메달</th>
							<th>동메달</th>
							<th>액션</th>
						</tr>
					</thead>
					<tbody>{trHandler}</tbody>
				</table>
			</div>
		);
	}
};

export default Contents;
