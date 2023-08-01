import React, { useState } from "react";


export default function TextForm(props) {
const [text, setText] = useState("");

    const handleUpClick = () => {
        //console.log("Uppercase was clicked" + text );
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    };
    const handlelowClick = () => {
        // console.log("LowerCase was clicked" + text );
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    };
    const handleOnChange = (event) => {
        //console.log("ON CHANGE");
        setText(event.target.value);
       

    };
    const clearText = ()=>{
         setText('');
        props.showAlert("Text Cleared","success");

    };
    const copyText = async()=>{
        await navigator.clipboard.writeText(text);
        props.showAlert("Copied to ClipBoard","success");
        

    };
    const removeSpaces=()=>{
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");

    }
    

    return (
        <>
            <div className="container" style= {{color:props.mode==='dark'?'white':'black'}}>
                <h1 >{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" ></textarea>
                </div>
                <button className={`btn btn-primary mx-2`}  onClick={handleUpClick}>
                    Convert to upper case
                </button>
                <button className={`btn btn-primary mx-2 `} onClick={handlelowClick}>
                    Convert to lower case
                </button>
                <button className={`btn btn-primary mx-2 `} onClick={clearText}>
                    Clear
                </button>
                <button className={`btn btn-primary mx-2 `} onClick={copyText}>
                    Copy
                </button>
                <button className={`btn btn-primary mx-2 `} onClick={removeSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
            <div className="container my-4" style= {{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words,{text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something in the above textbox to preview'}</p>
            </div>
        </>
    );
}

