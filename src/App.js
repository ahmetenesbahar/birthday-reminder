import React from "react";
import { useState } from "react";
import data from "./data/data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <main>
        <div className="container">
          <h3>{people.length} Birthdays Today !</h3>
          <List people={people} />
        </div>
      </main>
    </>
  );
}

export default App;
