import React from 'react';

function ClassSelection() {
  return (
    <div className="class-select-container">
      <h1 className="h1ChooseClass">Select Your Class</h1>
      <div className="class-select-table">
        <div className="class">
          <img alt="class image"></img>
          <p>class description</p>
          <p>class stats</p>
        </div>
        <div className="class">
          <img alt="class image"></img>
          <p>class description</p>
          <p>class stats</p>
        </div>
        <div className="class">
          <img alt="class image"></img>
          <p>class description</p>
          <p>class stats</p>
        </div>
      </div>
    </div>
  )
}

export default ClassSelection