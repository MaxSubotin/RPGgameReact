import React from "react";
import "../index.css";

function BattleScene() {
  return (
    <div className="battle-container">
      <div className="player-battle-box">
        <div className="class warrior still">
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

      <div className="enemy-battle-box">
        <div className="class mage still">
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
