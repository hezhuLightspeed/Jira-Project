import { FormEvent } from "react";
import { useAuth } from "../../context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
  // login
  const { login, user } = useAuth();
  // handle submit
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>    
      <div>
        <label htmlFor="username">Username: </label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" id={"password"} />
      </div>
      <button type={"submit"}>Login</button>
    </form>
  );
};
