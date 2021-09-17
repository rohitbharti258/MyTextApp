import React, { useState } from 'react'


export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleUpclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showalert("Converted to uppercase","success");
    
    }
    const handleDownclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showalert("Converted to lowercase","success");
    }
    const handleClearclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText= '';
        setText(newText);
        props.showalert("Cleared text","success");
    }
    const handleOnchange= (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy= ()=>{
        var tex = document.getElementById("exampleFormControlTextarea1");
        tex.select();
       navigator.clipboard.writeText(tex.value);
       props.showalert("Copied to clipboard","success");
    }
    const handleextraspaces= ()=>{
   let newtxt = text.split(/[ ]+/);
   setText(newtxt.join(" "));
  
      props.showalert("Extra spaces removed","success");
    }

    return (
        <>
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1"  className="form-label"></label>
                <textarea className="form-control" value={text} style={props.style} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpclick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownclick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearclick} >Clear text</button> 
            <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy text</button> 
            <button className="btn btn-primary mx-2" onClick={handleextraspaces} >Remove extra sapce</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
            <p><b>{0.008*text.split(" ").length}</b> Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
        </>
    )
}
