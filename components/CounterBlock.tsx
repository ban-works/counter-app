import React, {useState} from 'react';
import Counter from '../components/counter'
import AddButton from '../components/add-button'
import ResetButton from '../components/reset-button'

interface CounterBlockProps{
  firstButton?:number;
  secondButton?:number;
}

function CounterBlock(props:CounterBlockProps) {

  // const {firstButton, secondButton}= props;
  const [count, setCount] = useState(0)

  var updateCount = (value:number) =>{
    setCount(count+value)
  }
  var resetCount = ()=>{
    setCount(0)
  }
  // display conditionnal

    return (
      <div>    
        <Counter count={count}/>
        <AddButton
          value={props.firstButton} 
          handleClickParent={updateCount}
        />
        <AddButton 
          value={props.secondButton} 
          handleClickParent={updateCount}
        />
        <ResetButton 
          handleClickParent={resetCount}
        />
      </div>
    );
  }
  
  export default CounterBlock;