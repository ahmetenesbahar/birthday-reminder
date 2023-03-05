import { createContext, useState, useEffect } from "react";
import data from "../data/data";

const PersonContext = createContext();

export const PersonProvider = ({ children }) => {
  const [people, setPeople] = useState(data);

  return (
    <PersonContext.Provider
      value={{
        people,
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};

export default PersonContext;
