import logo from "./logo.svg";
import style from "./App.module.scss";
import Counter from "./screens/Counter";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import { Router, Route, Switch } from "react-router-dom";
import Header from "./layouts/UpperNav/UpperNav";

function App() {
    const [open, setOpen] = useState(true);
    function hideNav() {
        setOpen(false);
    }
    function showNav() {
        setOpen(true);
    }

    return (
        <div className={style.App}>
            <header className={style["App-header"]}>
                <div>
                    <Header open={open} hideNav={hideNav} showNav={showNav} />
                </div>
                <Counter />
                <img src={logo} className={style["App-logo"]} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className={style["App-link"]}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Reactdadas
                </a>
            </header>
        </div>
    );
}

export default App;
