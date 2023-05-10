import "./App.css";
// import About from "./componet/About";
import Navbar from "./componet/Navbar";
import TextForm from "./componet/TextForm";
function App() {
  return (
    <>
      <Navbar title="Text Utils" aboutText = "About"/>
      <div className="container my-3">
      <TextForm heading = "Enter your Text to analyse below"/>
      {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
