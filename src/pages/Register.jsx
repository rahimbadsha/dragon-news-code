import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../provider/AuthContext";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);

  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name Should be more than 5 char");
      return;
    } else {
      setNameError("");
    }
    const email = form.email.value;
    const pass = form.password.value;
    const photUrl = form.image.value;

    //console.log(name, email, pass, photUrl);
    createUser(email, pass)
      .then((res) => {
        const user = res.user;
        updateUser( {displayName: name, photoURL: photUrl}).then(() => {
          setUser({ ...user, displayName: name, photoURL: photUrl });
          navigate("/")
        })
        .catch((error) => {
          // const errorCode = error.code 
          // const errorMessage = error.message
          // alert(errorMessage, errorCode)
          console.log(error)
          setUser(user) //ager user set holo abar
        })
        //console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
        <h2 className="font-bold text-2xl text-center">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            {nameError && <p className="text-red-500">{nameError}</p>}
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />

            {/* password */}
            <label className="label">Image Url</label>
            <input
              type="text"
              name="image"
              className="input"
              placeholder="image url"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="font-semibold text-center pt-10">
              Already have an account ?{" "}
              <Link className="text-secondary" to={"/auth/login"}>
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
