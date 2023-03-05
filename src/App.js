import React from "react";
import { useState } from "react";
import data from "./data/data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  const handleDelete = (id) => {
    setPeople(people.filter((data) => data.id !== id));
  };
  return (
    <>
      <main>
        <div className="container">
          <h3>{people.length} Birthdays Today !</h3>
          <List people={people} handleDelete={handleDelete} />
        </div>
      </main>
    </>
  );
}

export default App;
