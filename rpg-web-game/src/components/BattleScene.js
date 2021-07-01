import React from "react";
import "../index.css";

function BattleScene({
  setScreenState,
  currentClass,
  currentEnemy,
  generateEnemy,
  getRandomInt,
}) {
  getRandomInt();
  generateEnemy();
  return (
    <div className="battle-container">
      <div className="player-battle-box">
        <div className={`class ${currentClass} still`}>
          <ul className="class-ul">
            <li className="class-li">STR: 12</li>
            <li className="class-li">INT: 8</li>
            <li className="class-li">DEX: 11</li>
          </ul>
        </div>

        <div className="ui-box">
          <ul className="ui-box-ul">
            <li>Health</li>
            <li>Mana</li>
          </ul>
        </div>
      </div>

      <div className="console-box">
        <h1 className="console-box-title">FIGHT!</h1>
      </div>

      <div
        className="enemy-battle-box"
        onClick={() => setScreenState("EndScene")}
      >
        <div className={`class ${currentEnemy} still`}>
          <ul className="class-ul classEnemy">
            <li className="class-li">STR: 12</li>
            <li className="class-li">INT: 8</li>
            <li className="class-li">DEX: 11</li>
          </ul>
        </div>

        <div className="ui-box">
          <ul className="ui-box-ul">
            <li>Health</li>
            <li>Mana</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BattleScene;
