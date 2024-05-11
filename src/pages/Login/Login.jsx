/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextApi/AuthProvider";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { email, password };
    console.log(user);
    login(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero">
      <form
        onSubmit={handleLogin}
        className="card-body bg-base-200 rounded-md shadow-lg w-[350px]"
      >
        <h1 className="text-2xl text-center font-bold">Login Now</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="text-center">
          Don't have account?{" "}
          <Link to="/register" className="link text-blue-500">
            Register now
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;