
import React from 'react';

import Bardasz1 from './bardasz.svg'

function BardaszLogoDG(props){
    
    const w= (props.w >= 0) ? props.w : 0
    const h= (props.h >= 0) ? props.h : 0
    return <img src={Bardasz1} alt="Bardasz Logo" width={w} height={h}/>;
}

export default BardaszLogoDG