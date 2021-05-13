import React from 'react';


import './styles.scss';

const Loader = () => {

    return (
        <div className="loading">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>
    );
}
export default Loader;