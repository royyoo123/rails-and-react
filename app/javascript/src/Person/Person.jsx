import React from 'react';
// import './Person.css';


const person = (props) => {
	const style = {
		'@media (min-width: 500px)': {
			width: '450px'
		}
	}
	return (
		// <div className="Person" style={style}>
		
			<p onClick={props.click} onChange={props.change}>I'm {props.name} and I am {props.age} years old!</p>
			
			
		
	)
};

export default person;