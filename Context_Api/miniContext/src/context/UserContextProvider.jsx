import React, { useState } from "react";
import UserContext from "./UserContext";

//Here children prop is used to define what gets rendered within the context provider
//it allows you to encapsulate components or content that need access to the data provided by the context

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
