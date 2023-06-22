import { useState } from 'react'
import '../App.css'

const List = ({change,options}) => {
    
    const [list,setList] = useState(options)
    return(
        
            <div>
                chose your color:
                <select value='colors' onChange={(e) => change(e.target.value)}>
                {
                    list.map((item) => 
                        (<option value={item.value}>{item.label}</option>)
                    )
                }
                </select>
            </div>
    )
}


export default List;