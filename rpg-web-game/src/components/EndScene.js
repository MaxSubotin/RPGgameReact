import React from "react";
import "../index.css";

function BattleScene({ setScreenState, setCurrentClass }) {
  return (
    <div className="end-container">
      <p className="end-p">You Win!</p>
      <div className="end-btn-div">
        <button
          className="end-btn"
          onClick={() => setScreenState("BattleScene")}
        >
          next battle
        </button>
        <button
          className="end-btn"
          onClick={() => {
            setScreenState("ClassSelection");
            setCurrentClass("");
          }}
        >
          class selection
        </button>
      </div>
    </div>
  );
}

export default BattleScene;
