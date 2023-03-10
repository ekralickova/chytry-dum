import React, { useState } from 'react';
import './style.css';

const Climate = ({ temperature, humidity }) => {

	const [teplota, setTeplota] = useState(temperature);

	return (
		<>
			<div className='climate'>
				<div className='climate__icon'>
					<img src={require(`./images/temp.svg`)} />
				</div>
				<div className='climate__content'>
					<div className='climate__temperature'>{teplota}</div>
					<div className='climate__humidity'>Vlhost vzduchu {humidity}</div>
				</div>
				<div className='climate__controls'>
					<button className='button' onClick={() => setTeplota(teplota + 1)}>+</button>
					<button className='button' onClick={() => setTeplota(teplota - 1)}>-</button>
				</div>
			</div>

		</>
	);
};

export default Climate;