import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextApi/AuthProvider";
import swal from "sweetalert";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

/* eslint-disable react/no-unescaped-entities */
function Register() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [photo, setPhoto] = useState(null);
  const { createUser, update } = useContext(AuthContext);
  const navigate = useNavigate();

  const validation = (name, email, photo, password) => {
    if (name.length < 6) {
      swal({
        title: "Invalid name!",
        text: "Use a Valid name!",
        icon: "warning",
      });
      return false;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      swal({
        title: "Invalid email!",
        text: "Use a Valid email!",
        icon: "warning",
      });
      return false;
    }
    if (photo.length < 6) {
      swal({
        title: "Invalid photo URL!",
        text: "Use a Valid photo URL!",
        icon: "warning",
      });
      return false;
    }
    if (password.length < 6) {
      swal({
        title: "Password is too Short!",
        text: "Password should be 6 characters or longer!",
        icon: "warning",
      });
      return false;
    } else if (!/[A-Z]/.test(password)) {
      swal({
        title: "Weak password!",
        text: "Must include at least one uppercase letter!",
        icon: "warning",
      });
      return false;
    } else if (!/[a-z]/.test(password)) {
      swal({
        title: "Weak password!",
        text: "Must include at least one lowercase letter!",
        icon: "warning",
      });
      return false;
    }

    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validation(name, email, photo, password)) {
      return;
    }
    const userInfo = { name, email, password };
    console.log(userInfo);
    createUser(email, password)
      .then(() => {
        swal({
          title: "Grate!",
          text: "Account Creation Success!",
          icon: "success",
        });
        update(name, photo);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Registration Failed!",
          text: "Something went wrong!",
          icon: "warning",
        });
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
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
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
        <SocialLogin />
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
