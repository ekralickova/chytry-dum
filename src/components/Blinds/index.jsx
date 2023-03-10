import React, { useState } from 'react';
import './style.css';

const Blinds = ({ state }) => {

    const [stav, setStav] = useState(state);

    return (
        <>
            <div className='blinds'>
                <div className='blinds__icon'>
                    <img src={require(`./images/blinds-${stav}.svg`)} />
                </div>
                <div className='blinds__name'>
                    Žaluzie
                </div>
                <div className='blinds__controls'>
                    <button className={stav === 'open' ? 'button button--active' : 'button'} onClick={() => setStav('open')}>Otevřeno</button>
                    <button className={stav === 'closed' ? 'button button--active' : 'button'} onClick={() => setStav('closed')}>Zavřeno</button>
                </div>
            </div>

        </>
    );
};

export default Blinds;