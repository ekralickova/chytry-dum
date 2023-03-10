import React, { useState } from 'react';
import './style.css';

const Light = ({ name, state }) => {

    const [stav, setState] = useState(state);

    return (
        <>
            <div className='light' onClick={() => setState(stav === 'off' ? 'on' : 'off')}>
                <div className='light__icon' >
                    <img src={require(`./images/light-${stav}.svg`)} />
                </div>
                <div className='light__name'>{name}</div>
            </div>

        </>
    );
};

export default Light;