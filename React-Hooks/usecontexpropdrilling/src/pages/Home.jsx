import { AppContext } from "../App";
import { useContext } from "react";
export const Home = () => {
  const { username } = useContext(AppContext);
  return <h3>This is Home Page and user is :{username}</h3>;
};
