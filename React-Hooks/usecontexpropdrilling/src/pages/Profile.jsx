import { ChangeProfile } from "../components/ChangeProfile";
import { AppContext } from "../App";
import { useContext } from "react";

export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      {" "}
      Profile userName is :{username}
      <ChangeProfile />
    </div>
  );
};
