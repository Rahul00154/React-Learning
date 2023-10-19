import { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";
export const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);
  const [newUserName, setNewUserName] = useState("");
  return (
    <div>
      {""}
      <input onChange={(e) => setNewUserName(e.target.value)} />
      <button onClick={() => setUsername(newUserName)}>Change Username</button>
    </div>
  );
};
