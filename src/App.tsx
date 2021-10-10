import { useState } from "react";
import style from "./App.module.scss";
import Header from "./layouts/UpperNav";
import Sidebar from "./layouts/SideNav";

function App() {
    const [unfolded, setUnfolded] = useState(true);

    function collapse(): void {
        setUnfolded((prevState) => !prevState);
    }

    return (
        <div className={style.App}>
            <header className={style["App-header"]}>
                <div>
                    <Header unfolded={unfolded} />
                </div>

                <div className="main">
                    <Sidebar unfolded={unfolded} collapse={collapse} />
                </div>
            </header>
        </div>
    );
}

export default App;
