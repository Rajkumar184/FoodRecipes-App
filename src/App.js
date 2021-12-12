import React, { useState } from "react";
import "./App.css";
import Menu from "./components/MenuItems";
import MainSection from "./components/MainSection";
import Categry from "./components/Categry";

const allCatValues = [
	...new Set(Menu.map((curElem) => curElem.category)),
	"all",
];

console.log(allCatValues);
const App = () => {
	const [items, setItems] = useState(Menu);
	const [catItems, setCatItems] = useState(allCatValues);

	const filterItem = (category) => {
		if (category === "all") {
			setItems(Menu);
			return;
		}

		const updatedItems = Menu.filter((curElem) => {
			return curElem.category === category;
		});

		setItems(updatedItems);
	};

	return (
		<>
			<h1 className="mt-5 text-center main-heading">
				Order Your Favourite Dish
			</h1>
			<hr />

			<Categry
				filterItem={filterItem}
				catItems={catItems}
				setCatItems={setCatItems}
			/>
			<MainSection items={items} />
		</>
	);
};

export default App;
