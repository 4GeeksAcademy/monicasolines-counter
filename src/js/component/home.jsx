import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Counter } from "./Counter.jsx";
import { Countdown } from "./Countdown.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Counter />
			{/* <Countdown/> */}
		</div>
	);
};

export default Home;
