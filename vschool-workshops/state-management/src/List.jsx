import React from "react";
import Item from './Item.jsx'

function List(props){

    return(
        <div>
            {/* loop through items and render <Item/> */}
            {props.items.map((item) => (
                <Item key={item._id}/>
            ))}
        </div>
    )
}

export default List;