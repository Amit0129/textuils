import { useState } from "react";
import "./App.css";
// import About from "./componet/About";
import Navbar from "./componet/Navbar";
import TextForm from "./componet/TextForm";
function App() {
  const [mode,setMode] = useState('light') //Dark mode is enable or not
  const [modeText,setModeText] = useState('Enable DarkMode')
  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = "white"
      setModeText("Enable DarkMode")
      
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
      setModeText("Disable DarkMode")
    }
  }
  return (
    <>
      <Navbar title="Text Utils" aboutText = "About" mode={mode} toggleMode = {toggleMode} modeText ={modeText}/>
      <div className="container my-3">
      <TextForm heading = "Enter your Text to analyse below" mode={mode} />
      {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
