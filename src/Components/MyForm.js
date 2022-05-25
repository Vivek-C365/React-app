import React ,{useState} from 'react'

export default function MyForm(props) {

  const [text ,setText] = useState('');

  const upperclick = ()=>{
    console.log("upper btn is clicked")

    let newText = text.toUpperCase();
    setText(newText);
  }

  const onchnga =(event)=>{
    console.log("on chage is working")
    setText(event.target.value);
    
    
  }
  const lowerclick= ()=>{
    console.log("lower btn is clicked")

    let newText = text.toLowerCase();
    setText(newText);
  }
  const clearclick =()=>{
    let newText = '';
    setText(newText);
  }
  const Copyclick= ()=>{

    let box =document.getElementById('myBox');
    box.select();
    navigator.clipboard.writeText(box.value);
  }

  const downloadTxtFile = () => {
    let box =document.getElementById('myBox');
    const element = document.createElement("a");
    const file = new Blob([box.value], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };






  return (
    <>
    
      <div className="container">
        <h1>{props.heading}</h1>
        <textarea  className="form-control" value={text} placeholder="enter rour text" onChange={onchnga} id="myBox" rows="8" style ={{backgroundColor:props.mode ==='dark'?'#343a40':'white',color:props.mode ==='dark'?'white':'black'}}></textarea>
      </div>
      <button className='btn btn-primary my-3 mx-3' onClick={upperclick}> UpperCase</button>
      <button className='btn btn-primary my-3 mx-3' onClick={lowerclick}> lowerclick</button>
      <button className='btn btn-primary my-3 mx-3' onClick={clearclick}> Clear</button>
      <button className='btn btn-primary my-3 mx-3' onClick={Copyclick}> Copy</button>
      <button className='btn btn-primary my-3 mx-3' onClick={downloadTxtFile}>Download txt</button>
  


    <div className="container">
      <h1>{props.textsummary}</h1>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <h3>{props.timetaken} :-</h3> <p>{0.008*text.split(" ").length}/Min Time taken by User</p>
      <h1>{props.preview}</h1>
      <p>{text.length>0?text:"Enter the text in Upper box to get preview here"}</p>
    </div>
    </>
      
  )
}

























// // Declare a new state variable, which we'll call "count"
// const [text ,setText] = useState('');

// const upperclick = ()=>{
//   console.log('clicked on upper case btn')
//   let newtext = text.toUpperCase();
//   setText(newtext);
// }

// const downclick = ()=>{
//   console.log('clicked on lower case btn')
//   let newtext = text.toLowerCase();
//   setText(newtext);
// }

// const onchga=(event)=>{
//   console.log('on chaga')
//   setText(event.target.value)
// }
// return (
//   <>


//   {/* ////////////////////////////
//   //////////////////////////// */}
//   <h1>{props.heading}</h1>
//   <div className="mb-3">
//   <textarea className="form-control" value={text} onChange={onchga} placeholder="Enter the text" id="myBox" rows="8"></textarea>
//   </div>
//   <button className='btn btn-primary my-3' onClick={upperclick} >UpperCase</button>
//   <button className='btn btn-primary my-3 mx-3'onClick={downclick}>LowerCase</button>
//   {/* ////////////////////////////
//   //////////////////////////// */}


//   {/* ////////////////////////////
//   //////////////////////////// */}


//   {/* tut 8 20 may */}
//   <div className="continer">
//     <h1>{props.text}</h1>
//     <p>{text.split(" ").length} words and {text.length} Characters</p>
//     <p>{0.0008*text.split(" ").length} -Min  reading time taken by user</p>
//     <h2>{props.preview}</h2>
//     <p>{text}</p>
    
//   </div>


//   {/* ////////////////////////////
//   //////////////////////////// */}
//   </>