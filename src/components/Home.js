import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../features/auth/authSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };
  return (
    <>
      <Link to="/products">Products</Link>
      <h1>Home</h1>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Home;
