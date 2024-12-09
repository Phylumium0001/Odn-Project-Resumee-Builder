import React,{useState} from "react";


export default function InputField({setState,name, label, type}){
    const handleInput = (event)=>{
        setState(event.target.value)
    }
    return (
    <div className="form_row">
        <label>{label}</label>
        <input type={type} name={name} onInput={handleInput}/>
    </div>)
}

