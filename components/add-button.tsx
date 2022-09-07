import React from 'react';
import { Button } from "@nextui-org/react";

function AddButton(props){

    var handleClick = () =>{
        props.handleClickParent(props.value)
    }

    return(
<Button onClick={()=>handleClick()} style={{margin:'20px'}} >
    Add {props.value} to the counter
</Button>

    )
}
export default AddButton;