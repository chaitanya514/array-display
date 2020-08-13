import React from "react"
import "./App.css"


const List = ({list}) =>{
    
    return(
        <div>
            <ul className="list">
                {list.cards.map((item)=>(
                    <li key={item.id}>{item.title}</li>
                ))}
                </ul>
         </div>
    )
}

export default List

