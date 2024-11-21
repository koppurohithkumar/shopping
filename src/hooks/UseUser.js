import { useContext } from "react";
import UserContext from "../states/UserContext";

function UseUser() {
  const user = useContext(UserContext);
  return user;
}

export default UseUser;
