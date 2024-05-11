import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextApi/AuthProvider";

/* eslint-disable react/no-unescaped-entities */
function Register() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const userInfo = { name, email, password };
    console.log(userInfo);
    createUser(email, password)
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
        onSubmit={handleRegister}
        className="card-body bg-base-200 rounded-md shadow-lg w-[350px]"
      >
        <h1 className="text-2xl text-center font-bold">Register Now</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
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
            placeholder="Password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Create Account</button>
        </div>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="link text-blue-500">
            Login now
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
