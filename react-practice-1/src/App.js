import Navbar from "./components/Navbar.js";
import TextArea from "./components/TextArea.js";
import React, { useState } from 'react';
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import { BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";


function App() {
    const [mode,setMode] = useState("light");
    const [text,setText] = useState(null);

    const handleToggle = ()=>{
      if(mode === "light"){
        setMode("dark");
        document.getElementById('body').style.backgroundColor = 'darkgrey';
        setAlert("Dark mode is successfully Activated","Success");
      }
      else{
        setMode("light");
        document.getElementById('body').style.backgroundColor = 'white';
        setAlert("Light mode is successfully Activated","Success");
      }
    }

    const setAlert = (message,type)=>{
      setText({
        msg:message,
        typ:type
      })
      
      setTimeout((message,type) => {
        setText(null);
      },2000);
    }
    
    return (
        <>
          <Navbar title="Text_Utils" about="About TextUtils" mode={mode} handleToggle={handleToggle} />
          <Alert text={text}/>
          <div className="container" >
            <TextArea heading="Enter the Text here" setAlert={setAlert} mode={mode}/>
          </div>
          <div className="container">
            <About/>
          </div>
        </>
    );
}
export default App;
