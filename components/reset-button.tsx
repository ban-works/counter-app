import React from 'react';
import { Button } from "@nextui-org/react";

function ResetButton({handleClickParent}){

    var handleClick = () =>{
        handleClickParent()
    }

    return(
<Button onClick={()=>handleClick()} style={{margin:'20px'}} >
    Reset the counter
</Button>

    )
}
export default ResetButton;