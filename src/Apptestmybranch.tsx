import { useState } from "react";
import style from "./App.module.scss";
import Header from "./layouts/UpperNav";
import Sidebar from "./layouts/SideNav";

function App() {
    const [IsNavigationUnfolded, setIsNavigationUnfolded] = useState(true);

    return (
        <div className={style.App}>
            <header className={style["App-header"]}>
                <div>
                    <Header IsNavigationUnfolded={IsNavigationUnfolded} />
                </div>

                <div className="main">
                    <Sidebar
                        IsNavigationUnfolded={IsNavigationUnfolded}
                        setIsNavigationUnfolded={setIsNavigationUnfolded}
                    />
                </div>
            </header>
        </div>
    );
}

export default App;
