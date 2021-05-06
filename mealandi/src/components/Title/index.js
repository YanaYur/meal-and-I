import React from 'react';

import './styles.scss';

const Title = ({name})=>{
    return (
        <div key="title" className="title">
         <h4>{name}</h4>
        </div>
    );

}
export default Title;