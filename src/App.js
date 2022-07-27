import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light') // whether dark mode enabled or not

  const [alert, setAlert] = useState(null) //alert - object

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const removeBodyClasses= ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')

  // }
  const setColor = {
    green :()=>{
      document.body.style.backgroundColor = '#006622';
      showAlert("Green mode enabled","success");
    },

    red :()=>{
      document.body.style.backgroundColor = '#ff8080';
      showAlert("Red mode enabled","success");
    },

    yellow :()=>{
      document.body.style.backgroundColor = '#808000';
      showAlert("Yellow mode enabled","success");
    }

  };

  const toggleMode = (cls)=>{
    // removeBodyClasses()
    // console.log(cls)
    
    // document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(0 0 0)';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';

      // setInterval(() => {
      //   document.title = 'TextUtils - Dark Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} setColor={setColor}/>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode}/>}/>
          </Routes>
          {/* Previously */}
          {/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert = {showAlert}/> */}
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
