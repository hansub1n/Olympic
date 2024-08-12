import React from "react";

const Contents = (props) => {
	const { countries, setCountries } = props.contentsProps;

	if (countries.length === 0) {
		return (
			<div>
				<p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
			</div>
		);
	} else {
		// 렌더링 될 때
		// 금메달 갯수가 많은 것부터 내림차순
		// 금메달 수가 같다면 은메달, 동메달...
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
		return (
			<div>
				<table style={{ width: "100%" }}>
					<thead>
						<tr>
							<td>국가명</td>
							<td>금메달</td>
							<td>은메달</td>
							<td>동메달</td>
							<td>액션</td>
						</tr>
					</thead>
					<tbody>
						{sortedCountries.map((c, index) => (
							<tr key={index}>
								<td>{c.name}</td>
								<td>{c.gold}</td>
								<td>{c.silver}</td>
								<td>{c.bronze}</td>
								<td>
									<button
										onClick={() => {
											const filteredItmes =
												countries.filter(
													(selectiedCountry) =>
														selectiedCountry.name !==
														c.name
												);
											setCountries(filteredItmes);
										}}
									>
										삭제
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
};

export default Contents;
