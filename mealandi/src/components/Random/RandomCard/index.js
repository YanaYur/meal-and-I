import React from 'react';
import random from '../../../assets/images/random.jpg';

const coverRandom = () => {
    return <div key="1" className="random-cover">
        <img src={random} alt='cover'></img>
    </div>
}

export default coverRandom;