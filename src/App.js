import React, { useState } 
from "react";
import './App.css';
import Button from "./Button";
import Result from "./Result";

const App = () => {
  const[result, setResult] = useState("");

  function handleClick(event) {
   setResult(result + event.target.name);
  }
  function backspace() {
    setResult(result.slice(0, result.length - 1));
  }
  function calculate() {
    try{
      setResult(eval(result) + "" );
    } catch (error){
      setResult("Error");
    }
  }
  function allClear() {
    setResult("");
  }
  return(
    <div className="calculator">  
      <div class="mainCalc"> 
      <Result value = {result}/>
      <div className = "keypad">
        <div className="button-row"> 
          <Button onClick = {backspace} label={'C'} />
          <Button name = "AC" onClick = {allClear} label={'AC'}/> 
          <Button name = "%" onClick = {handleClick} label={'%'}/>  
          <Button name = "/" onClick = {handleClick} label={'/'} style = {{backgroundColor:"#f39d29", color:"#fff"}}/> 
        </div> 
        <div className="button-row"> 
          <Button name = "7" onClick = {handleClick} label={'7'} style = {{backgroundColor:"#333333", color:"#fff"}}/> 
          <Button name = "8" onClick = {handleClick} label={'8'} style = {{backgroundColor:"#333333", color:"#fff"}}/> 
          <Button name = "9" onClick = {handleClick} label={'9'} style = {{backgroundColor:"#333333", color:"#fff"}}/> 
          <Button name = "*" onClick = {handleClick} label={'*'} style = {{backgroundColor:"#f39d29", color:"#fff"}}/> 
        </div> 
        <div className="button-row"> 
          <Button name = '4' onClick = {handleClick} label={'4'} style = {{backgroundColor:"#333333", color:"#fff"}}/> 
          <Button name = '5' onClick = {handleClick} label={'5'} style = {{backgroundColor:"#333333", color:"#fff"}}/> 
          <Button name = '6' onClick = {handleClick} label={'6'} style = {{backgroundColor:"#333333", color:"#fff"}}/> 
          <Button name = '-' onClick = {handleClick} label={'-'} style = {{backgroundColor:"#f39d29", color:"#fff"}}/> 
        </div> 
        <div className="button-row"> 
          <Button name = "1" onClick = {handleClick} label={'1'} style = {{backgroundColor:"#333333", color:"#fff"}}/> 
          <Button name = "2" onClick = {handleClick} label={'2'} style = {{backgroundColor:"#333333", color:"#fff"}}/> 
          <Button name = "3" onClick = {handleClick} label={'3'} style = {{backgroundColor:"#333333", color:"#fff"}}/> 
          <Button name = "+" onClick = {handleClick} label={'+'} style = {{backgroundColor:"#f39d29", color:"#fff"}}/> 
        </div> 
        <div className="button-row" style = {{textAlign:"right"}}>  
          <Button name = "0" onClick = {handleClick}label={'0'} style = {{backgroundColor:"#333333", color:"#fff"}}/> 
          <Button name = "." onClick = {handleClick}label={'.'} style = {{backgroundColor:"#333333", color:"#fff"}}/>
          <Button name = "," onClick = {handleClick} label={','} style = {{backgroundColor:"#333333", color:"#fff"}}/> 
          <Button onClick = {calculate} label={'='} style = {{backgroundColor:"#f39d29", color:"#fff"}}/>  
        </div> 
        </div>
      </div> 
    </div> 
  );
}

    

export default App;
