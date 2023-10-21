import { useState, useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
  const [newName, setNewName] = useState("");
  const { setName } = useContext(AppContext);
  return (
    <div>
      <input type="text" onChange={(e) => setNewName(e.target.value)} />
      <button onClick={() => setName(newName)}>Change Name</button>
    </div>
  );
};
