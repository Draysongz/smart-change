import React from "react";
import Main from "./Layout/Main";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    
    <div className="App">
    
      <Main/>
      <ToastContainer/>
    </div>
    
  );
}

export default App;
