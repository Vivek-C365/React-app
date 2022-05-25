import './App.css';
import MyForm from './Components/MyForm';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState('light');
  const [btn , setbtn]= useState('Light Mode');

  const togglemode=()=>{
    if (mode ==='light') {
      setmode('dark')

      setbtn('Dark Mode')
      document.body.style.background='#343a40'
      document.body.style.color='white'

    } else {
      setmode('light');
      setbtn('Light Mode')
      document.body.style.background='white'
      document.body.style.color='black'
    }

  }


  return (
    <>
    <Router>



    
    <Navbar title="365Day" mode={mode} btn={btn} togglemode={togglemode}/>
    <Alert mode={mode} alert="This alert given by the onwer"/>
    <div className="container">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <MyForm heading="Enter the text"mode={mode} preview="Preview" textsummary="Text Summary" timetaken="Time taken to read"/>
          </Route>
        </Switch>
        
          
        

    
    </div>
    </Router>
  
  
    </>
  );
}

export default App;
