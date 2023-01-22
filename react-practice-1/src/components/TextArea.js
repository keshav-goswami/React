import React, { useState } from "react";

export default function TextArea(props) {
    const [text, setText] = useState("Enter text here");

    const handleLowerCase = () => {
        let new_text = text.toLowerCase();
        setText(new_text);
        props.setAlert("Text converted to lower case","Success");
    };

    const handleUpperCase = () => {
        let new_text = text.toUpperCase();
        setText(new_text);
        props.setAlert("Text converted to upper case","Success");
    };

    // As we input something in text area it will also change text
    const handleOnchange = (event) => {
        setText(event.target.value);
    };
    
    const handleSpaces = ()=>{
        let new_text = text.split(/[ ]+/);
        new_text = new_text.join(" ");
        new_text = new_text.split("\n")
        setText(new_text.join(" "))  ;
        props.setAlert("Extra Spaces are successfully cleared","Success");
    };

    const handleClear = ()=>{
        setText("");
        props.setAlert("Text is successfully cleared","Success");
    };


    let len = text.split(" ").length;

    return (
        <>
            <div className="container">
                <h2 className="my-3">{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        id="exampleFormControlTextarea1"
                        onChange={handleOnchange}
                        rows="10"
                        style = {{
                            backgroundColor:`${props.mode==='light'?'white':'black'}`,
                            color:`${props.mode==='light'?'black':'white'}`
                        }}
                    ></textarea>
                </div>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleUpperCase}
                >
                    To UpperCase
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleLowerCase}
                >
                    To LowerCase
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleSpaces}
                >
                    Rm Extra Spaces
                </button>

                <button
                    className="btn btn-danger mx-1"
                    onClick={handleClear}
                >
                    Clear
                </button>
            </div>
            <div className="container my-4">
                <h1>Text Details</h1>
                <p>{len} words and {text.length} characters</p>
            </div>
        </>
    );
}
