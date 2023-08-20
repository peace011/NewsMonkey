import React, { useState } from 'react'

function TextForms(props) {
  const[text,setText]=useState("Enter text here")
 

  const handleOnChange=(e)=>{
    console.log(e.target.value)
    setText(e.target.value);
  }

  const handleLoClick=(e)=>{
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleUpClick=(e)=>{
    let newText=text.toUpperCase();
    setText(newText);
    console.log("Uppercase selelct")

  }
  const handleClClick=(e)=>{
    let newText='';
    setText(newText);

  }
  return (
    <div>
        <h1>{props.heading} </h1>
        <div className="mb-3">
  {/* <label for="myBox" class="form-label">Example Textarea</label> */}
  <textarea className="form-control" onChange={handleOnChange} id="myBox" rows='8'></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleClClick}>Clear Text</button>


    
    <div className='container my-2'>
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008*text.split(" ").length}Minutes read</p>
      <h4>Preview</h4>
      <p>{text}</p>
    </div>
    </div>
  )
}

export default TextForms