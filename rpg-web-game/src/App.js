import { useState } from "react";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import ClassSelection from "./components/ClassSelection";
import BattleScene from "./components/BattleScene";
import EndScene from "./components/EndScene";
import "./index.css";

function App() {
  const [] = useState();

  return (
    <div className="window-div">
      <Navbar />
      {/* <Signin /> */}
      {/* <Register /> */}
      {/* <ClassSelection /> */}
      <BattleScene />
      {/* <EndScene /> */}
    </div>
  );
}

export default App;
