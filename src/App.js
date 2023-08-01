import React, { useState } from "react";
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from "./components/Alert";
{/*import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";*/}





 function App() {
  const[mode,setmode]=useState('light');//dark Mode enable or not

  const[alert,setAlert]=useState(null);

 

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  },1500);

}
const handleGreenClick=()=>{
  setmode('dark');
  document.body.style.backgroundColor = 'green';
  document.title = 'Textutils - Green Mode';

}
const handleRedClick=()=>{
    setmode('dark');
    document.body.style.backgroundColor = 'red';
    document.title = 'Textutils - Red Mode';

}
  
const handleBlackClick=()=>{
    setmode('dark');
    document.body.style.backgroundColor = 'black'; 
    document.title = 'Textutils - Black Mode';

}

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#1d4177';
      showAlert("Dark Mode has been enabled","success");
      document.title = 'Textutils - Dark Mode';
      /*setInterval(()=>{
      document.title = 'Textutils is the best application';
      },2000)
      setInterval(()=>{
        document.title = 'Install Textutils now!!';
        },1500)*/
      }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'White';
      showAlert("Light Mode has been enabled","danger");
      document.title = 'Textutils - Light Mode';



    }
  }
  
  return (
    <>
{/*<Router>*/}
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode} handleRedClick={handleRedClick} handleGreenClick={handleGreenClick} handleBlackClick={handleBlackClick} />
<Alert alert={alert}/>
<div className="container my-3">
{/*<Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">*/}
          <TextForm showAlert={showAlert} heading="Enter Your text to analyze below"  mode={mode}/>
         {/* </Route>
  </Switch>*/}


</div>
{/*</Router>*/}

    
    </>
  );
}


export default App;
