import React from "react";

function Counter(props) {

  return (
    <div>    
       <h1 style={{textAlign: 'center'}}>Counter :
       <br/>
       {props.count}</h1> 
    </div>
  );
}

export default Counter;
