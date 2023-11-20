import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import AllData from "./alldata.js";
import CreateAccount from "./createaccount.js";
import Deposit from "./deposit.js";
import NavBar from "./navbar.js";
import Withdraw from "./withdraw.js";
import Home from "./home.js";
import Balance from "./balance.js";
import './App.css';
import {UserContext} from "./context"

const App = () => {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/createaccount/" element={<CreateAccount/>} />
          <Route path="/deposit/" element={<Deposit/>} />
          <Route path="/withdraw/" element={<Withdraw/>} />
          <Route path="/balance/" element={<Balance/>} />
          <Route path="/alldata/" element={<AllData/>} />
          </Routes>
        </div>                    
      </UserContext.Provider>      
    </HashRouter>
  );
}

export default App;
