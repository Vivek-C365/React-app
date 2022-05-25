





// import React ,{useState} from 'react'
import React ,{useState} from 'react'

export default function About() {

    // tut 10 / 21 may 2022

    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    const [mystyle, setmystyle] = useState({
        color:'#212529',
        background :'white'
    })

    const [btnText, setbtnText] = useState("Enable Dark Mode")
    
    const darkbtn=()=>{
        if (mystyle.color ==='#212529') {
            setmystyle({
                color:'white',
                background :'#212529'
            })
            setbtnText("Enable Light Mode")
            
        } else {
            setmystyle({
                color:'#212529',
                background:'white'
            })
            setbtnText("Enable Dark Mode")
        }
    }

  return (
    <div className='container'>
 
        <div className="accordion" id="accordionExample">
            <h1 className='my-3'>About US</h1>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>



        <div className="container">
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={darkbtn} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label">{btnText}</label>
            </div>
        </div>
    </div>
  )
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
}
