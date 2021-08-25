import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick= (e)=>{
        // console.log("Upper was clicked");
        e.preventDefault();
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick= (e)=>{
        e.preventDefault();
        // console.log("Upper was clicked");
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleOnChange= (event)=>{
        console.log("On Change was clicked");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    // setText('Changed new text');  Correct way to change the state
  return (
      <>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <form>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
      </form>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  );
}
