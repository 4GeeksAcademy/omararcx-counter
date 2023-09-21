import React from "react";


//create your first component
const SimpleCounter = (props) => {
	return (
		<div className="bigCounter">
			<div className="four">{props.four}</div>
			<div className="three">{props.three}</div>
			<div className="two">{props.two}</div>
			<div className="one">{props.one}</div>
		</div>

	);
};

export default SimpleCounter;
