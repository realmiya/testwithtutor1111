import logo from "./logo.svg";
import style from "./App.module.scss";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import { Router, Route, Switch } from "react-router-dom";
// import Header from "./layouts/UpperNav";
import Header from "./layouts/UpperNav";
import Sidebar from "./layouts/sideNav"
interface State{
    open:boolean;
}
function App() {
    const [open, setOpen] = useState(true);
    const anotherValue:boolean=open;
    function hideNav() {
        setOpen(false);
    }
    function showNav() {
        setOpen(true);
    }

    function showhide(){
        setOpen(!open)
    }

    return (
        <div className={style.App}>
            <header className={style["App-header"]}>
                <div>
                    <Header 
                    open={open} 
                    // anotherValue={anotherValue}
                    />

                </div>
                <div className="main">
                    {/* <Sidebar open={open} hideNav={hideNav} showNav={showNav} /> */}
                    <Sidebar 
                    open={open} 
                    // anotherValue={anotherValue}

                    // hideNav={hideNav} 
                    // showNav={showNav} />
                    showhide={showhide}/>
                    <div className="container">


                    </div>
                </div>

            </header>
        </div>
    );
}

export default App;
