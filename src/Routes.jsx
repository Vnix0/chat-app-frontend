import RegisterAndLoginForm from "./RegisterAndLoginForm";
import { UserContext } from "./UserContext.jsx";
import { useContext } from "react";
import Chat from "./Chat";

export default function Routes() {
  const { email, id } = useContext(UserContext);

  if (email) {
    return <Chat />;
  }

  return <RegisterAndLoginForm />;
}
