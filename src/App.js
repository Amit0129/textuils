import { useState } from "react";
import "./App.css";
import About from "./componet/About";
import Navbar from "./componet/Navbar";
import TextForm from "./componet/TextForm";
import Alert from "./componet/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //Dark mode is enable or not
  const [modeText, setModeText] = useState("Enable DarkMode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setModeText("Enable DarkMode");
      showAlert("Light mode is Enable", "success");
      document.title = "TextUtils - LightMode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setModeText("Disable DarkMode");
      showAlert("Dark mode is Enable", "success");
      document.title = "TextUtils - DarkMode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          mode={mode}
          toggleMode={toggleMode}
          modeText={modeText}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="about" element = {<About/>}/>
            <Route path="/" element = {<TextForm
                  showAlert={showAlert}
                  heading="Enter your Text to analyse below"
                  mode={mode}
                />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
