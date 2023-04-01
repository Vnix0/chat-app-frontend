import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

const RegisterAndLoginForm = () => {
  const [email, setEmail] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("register");
  const [password, setPassword] = useState("");
  const { setEmail: setLoggedInEmail, setId } = useContext(UserContext);

  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === "register" ? "register" : "login";
    const { data } = await axios.post(url, { email, password });
    setLoggedInEmail(email);
    setId(data.id);
  }
  return (
    <div className="bg-slate-800 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12 " onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          type="text"
          placeholder="email"
          className="block w-full rounded-sm p-2 mb-2 border"
        ></input>
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2  border "
        ></input>
        <button className="bg-cyan-500 text-white block w-full rounded-sm p-2">
          {isLoginOrRegister === "register" ? "Register" : "Login"}
        </button>
        <div className="text-center text-white mt-2 ">
          {isLoginOrRegister === "register" && (
            <div>
              Already a member?
              <button
                className="hover:text-cyan-500"
                onClick={() => setIsLoginOrRegister("login")}
              >
                Login here
              </button>
            </div>
          )}
          {isLoginOrRegister === "login" && (
            <div>
              dont have an account?
              <button
                className="hover:text-cyan-500"
                onClick={() => setIsLoginOrRegister("register")}
              >
                register her
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
export default RegisterAndLoginForm;
