import React from "react";

function List({ people }) {
  return (
    <>
      {people.map((person) => {
        return (
          <div className="person" key={person.id}>
            <img src={person.image} alt={person.name} />
            <div className="person-info">
              <h4 className="person-name">{person.name}</h4>
              <p className="person-age">Will be {person.age + 1} years old</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="48"
            >
              <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
            </svg>
          </div>
        );
      })}
    </>
  );
}

export default List;
