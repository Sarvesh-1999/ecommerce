import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    let payload = { userName, email, password };
    console.log(payload);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 py-8 px-2">
      <article className="w-full max-w-4xl bg-white/90 border border-gray-200 flex flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 sm:p-10 bg-white">
          <form className="w-full max-w-sm" onSubmit={handleRegister}>
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
              Create Your Account
            </h1>
            <div className="flex flex-col gap-5">
              <TextField
                id="userName"
                label="Username"
                variant="outlined"
                size="medium"
                fullWidth
                onChange={(e) => setUserName(e.target.value)}
                InputProps={{ className: "bg-white" }}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="medium"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{ className: "bg-white" }}
              />
              <TextField
                id="password"
                helperText="Password should be at least 9 characters"
                label="Password"
                type="password"
                variant="outlined"
                size="medium"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{ className: "bg-white" }}
              />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  background:
                    "linear-gradient(90deg, #6366f1 0%, #a21caf 100%)",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  py: 1.5,
                  borderRadius: 2,
                  boxShadow: 3,
                  ":hover": {
                    background:
                      "linear-gradient(90deg, #a21caf 0%, #6366f1 100%)",
                  },
                }}
              >
                Register
              </Button>
            </div>
          </form>
        </div>

        {/* Right Side (Form) */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 to-purple-400 text-white p-10 w-full md:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Welcome Page
          </h1>
          <p className="text-lg lg:text-xl font-semibold opacity-90">
            Already registered? <Link to={"/"}>Sign in</Link>
          </p>
        </div>
      </article>
    </section>
  );
};

export default RegisterPage;
