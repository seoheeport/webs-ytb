import React from 'react';

import { snsLink } from '../../data/header';

const Sns = () =>{
    return(
        <ul className='header__sns'>
            {snsLink.map((item, key)=>(
                <li key={key}>
                    <a href={item.url} target='_blank' rel='noopener noreferrer' aria-label={item.title}>{item.icon}</a>
                </li>
            ))}
        </ul>
    )
}

export default Sns
