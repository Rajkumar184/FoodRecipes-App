import React from "react";

const Categry = ({ filterItem, catItems }) => {
	return (
		<>
			<div className="menu-tabs container">
				<div className="menu-tab d-flex justify-content-around">
					{catItems.map((curClem, id) => {
						return (
							<button
								className="btn btn-warning"
								key={id}
								onClick={() => filterItem(curClem)}
							>
								{curClem}
							</button>
						);
					})}
					{/* <button className="btn btn-warning" onClick={() => filterItem('breakfast')}>Breakfast</button>
                    <button className="btn btn-warning" onClick={() => filterItem('lunch')}>Lunch</button>
                    <button className="btn btn-warning" onClick={() => filterItem('evening')}>Evening</button>
                    <button className="btn btn-warning" onClick={() => filterItem('dinner')}>Dinner</button> */}
					{/* <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button> */}
				</div>
			</div>
		</>
	);
};

export default Categry;
