import React from "react";
import "../index.css";

function ClassSelection() {
  return (
    <div className="class-select-container">
      <h1 className="h1ChooseClass">Select Your Class</h1>
      <div className="class-select-table">
        <div className="class warrior">
          <ul className="class-ul">
            <li className="class-li">STR: 12</li>
            <li className="class-li">INT: 8</li>
            <li className="class-li">DEX: 11</li>
          </ul>
          <p>
            this is the warrior class, he can smack your brains in using his
            bare hands
          </p>
        </div>
        <div className="class mage">
          <ul className="class-ul">
            <li className="class-li">STR: 12</li>
            <li className="class-li">INT: 8</li>
            <li className="class-li">DEX: 11</li>
          </ul>
          <p>
            this is the warrior class, he can smack your brains in using his
            bare hands
          </p>
        </div>
        <div className="class thief">
          <ul className="class-ul">
            <li className="class-li">STR: 12</li>
            <li className="class-li">INT: 8</li>
            <li className="class-li">DEX: 11</li>
          </ul>
          <p>
            this is the warrior class, he can smack your brains in using his
            bare hands
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClassSelection;
