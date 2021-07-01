import React from "react";
import "../index.css";

function BattleScene() {
  return (
    <div className="end-container">
      <p className="end-p">You Win!</p>
      <div className="end-btn-div">
        <button className="end-btn">next battle</button>
        <button className="end-btn">class selection</button>
      </div>
    </div>
  );
}

export default BattleScene;
