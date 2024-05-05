import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
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
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000c4a";
      showAlert("Dark mode has been Enabled", "success");
      // document.title = 'Docket - Dark Mode'
      // setInterval (()=>{
      //   document.title='install docket now'
      // },2000)
      // setInterval (()=>{
      //   document.title='Docket is amazing mode'
      // },1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="DOCKET" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            exact path="/"
            element={
              <Textform
                showAlert={showAlert}
                heading="Try Docket - Word counter , Character counter , Remove Extra spaces"
                mode={mode}
              />
            }
          />

          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
