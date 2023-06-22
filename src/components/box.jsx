import { useState } from 'react';
import '../App.css'
const Box = ({color}) => {
    
    return(
        <div style={
            {backgroundColor: color}
        } className="box">
            {color}
        </div>
    )
}

export default Box;