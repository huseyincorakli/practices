import { useDispatch, useSelector } from "react-redux";
import { login } from "../stores/AuthStore";
import { RootState } from "../stores";
import { Navigate } from "react-router-dom";

const Login = () => {
  const user = useSelector((state: RootState) => state.auth.user); // AuthSlice'daki "user" özelliğini alıyoruz
  const dispatch = useDispatch();

  return (
    <>
      {user ? (
        <Navigate to={'/profile'} />
      ) : (
        <div className="Login">
          <h2>Login</h2>
          <button onClick={() => { dispatch(login('hüseyin')) }}>login</button>
        </div>
      )}
    </>
  );
};

export default Login;
