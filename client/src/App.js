import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route} from 'react-router-dom';
import Property from "./components/Property";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Properties from "./components/Properties";

function App() {
  const [properties, setProperties] = useState([]);
  const [buyer, setBuyer] = useState(null);

  
  useEffect(() => {
    fetch("/buyers")
      .then((r) => {
        if (r.ok) {
          r.json().then((buyer) => setBuyer(buyer));
        }
      })
      .catch(console.error);
  }, []);

  
  useEffect(() => {
    fetch("/properties")
      .then((res) => res.json())
      .then((properties) => {
        console.log(properties);
        setProperties(properties);
      });
  }, []);

  return (
    <div className="App">
      <Navbar buyer={buyer} setBuyer={setBuyer} />
      
      {buyer ? (
        <Routes>
          <Route
            exact
            path="/"
            element={<Home properties={properties} buyer={buyer} />}
          ></Route>
        </Routes>
      ) : (
        <Routes>
          <Route
            exact
            path="/"
            element={<Home properties={properties} />}
          ></Route>
          <Route
            path="/properties/:id"
            element={<Property setBuyer={setBuyer} />}
          ></Route>
          <Route
            path="/properties"
            element={<Properties setBuyer={setBuyer} />}
          ></Route>
          <Route path="/about" element={<About setBuyer={setBuyer} />}></Route>
          <Route path="/signin" element={<SignIn setBuyer={setBuyer} />}></Route>
          <Route path="/signup" element={<SignUp setBuyer={setBuyer} />}></Route>
          <Route path="/about" element={<About setBuyer={setBuyer} />}></Route>
          
        </Routes>
      )}
    
    </div>
  );
}

export default App;