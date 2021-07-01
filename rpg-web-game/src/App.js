import { useState } from "react";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import ClassSelection from "./components/ClassSelection";
import BattleScene from "./components/BattleScene";
import EndScene from "./components/EndScene";
import "./index.css";

function App() {
  const [screenState, setScreenState] = useState("ClassSelection");
  const [currentClass, setCurrentClass] = useState("");
  const [currentEnemy, setCurrentEnemy] = useState("");
  const [currentEnemyNumber, setCurrentEnemyNumber] = useState(0);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const generateEnemy = () => {
    let index = getRandomInt(5);
    setCurrentEnemyNumber(index);
    if (index === 0) {
      setCurrentEnemy("orc1");
    } else if (index === 1) {
      setCurrentEnemy("troll1");
    } else if (index === 2) {
      setCurrentEnemy("orc2");
    } else if (index === 3) {
      setCurrentEnemy("troll2");
    } else if (index === 4) {
      setCurrentEnemy("orc3");
    }
  };

  // const generateEnemy = () => {
  //   for (
  //     let index = getRandomInt(5);
  //     index !== currentEnemyNumber;
  //     getRandomInt(5)
  //   ) {
  //     if (index === 0) {
  //       setCurrentEnemy("orc1");
  //     } else if (index === 1) {
  //       setCurrentEnemy("troll1");
  //     } else if (index === 2) {
  //       setCurrentEnemy("orc2");
  //     } else if (index === 3) {
  //       setCurrentEnemy("troll2");
  //     } else if (index === 4) {
  //       setCurrentEnemy("orc3");
  //     }
  //     return setCurrentEnemyNumber(index);
  //   }
  // };

  return (
    <div className="window-div">
      <Navbar />
      {(() => {
        if (screenState === "ClassSelection") {
          // console.log(currentClass);
          return (
            <ClassSelection
              setScreenState={setScreenState}
              setCurrentClass={setCurrentClass}
            />
          );
        } else if (screenState === "BattleScene") {
          // console.log(currentClass);
          return (
            <BattleScene
              setScreenState={setScreenState}
              currentClass={currentClass}
              currentEnemy={currentEnemy}
              getRandomInt={getRandomInt}
              generateEnemy={generateEnemy}
            />
          );
        } else if (screenState === "EndScene") {
          return (
            <EndScene
              setScreenState={setScreenState}
              setCurrentClass={setCurrentClass}
            />
          );
        }
      })()}
      {/* <Signin />
      <Register /> */}
    </div>
  );
}

export default App;
