import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { setCredentials } from "../features/auth/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (error) {
      navigate("/login");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <h5>login</h5>
      <div className="form-row">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="username"
          className="form-input"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-input"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="button button-block">
        login
      </button>
    </form>
  );
};

export default Login;
