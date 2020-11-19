
import React from 'react'; 

 
const Button = (props) => { 
return ( 
	< input type="button" name = {props.name} value = {props.label} style = {props.style}
	 className = "calcButton" onClick = {props.onClick} /> 
); 
} 
export default Button; 
