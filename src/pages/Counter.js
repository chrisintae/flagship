import React, { useState, Fragment } from 'react';

const Counter = () => {
	const [ count, setCount ] = useState(0);

	const addOne = () => setCount(count + 1);
	const minusOne = () => setCount(count - 1);
	const resetCount = () => setCount(0);

	return (
		<Fragment>
			<div>
				<h1>Counter</h1>
				<p>Using setState</p>
				<h3>Clicks: {count}</h3>
				<button onClick={addOne}>+1</button>
				<button onClick={minusOne}>-1</button>
				<button onClick={resetCount}>Reset</button>
			</div>
			<div>
				<h1>Evaluate expression</h1>
				<h5>Math random: {Math.random()}</h5>
				<h5>Math random, 0 - 99: {Math.random() * 100}</h5>
				<h5>Math floor, random, 1 - 10: {Math.floor(Math.random() * 10 + 1)}</h5>
			</div>
		</Fragment>
	);
};

export default Counter;
