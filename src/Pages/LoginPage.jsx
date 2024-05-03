import { useState } from "react";
import { useNavigate } from "react-router";
/* eslint-disable react/prop-types */

const LoginPage = ({ setLogged }) => {
  let navigate = useNavigate();
  async function login(email, password) {
    try {
      // Make an API request to your login endpoint
      const response = await fetch("https://localhost:7247/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      // Assuming the response JSON structure includes userId and roles
      const { userId, role } = await response.json();

      // Store user ID in local storage
      localStorage.setItem("userId", userId);

      // Determine the user's role, assume roles is an array
      return role.includes("admin") ? "admin" : "Patron";
    } catch (error) {
      console.error("Login error:", error);
      return null; // Return null or appropriate error handling
    }
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const role = await login(email, password);
    if (role == "Patron") {
      alert("Logged in as:", "Patron");
      setLogged(true);
      navigate("/");
      // Redirect or perform actions based on role
    } else {
      console.log("Login failed");
      alert("login Failed");
    }
  };

  return (
    <div
      className="flex justify-start items-center h-screen bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/images/bgSignUp.avif')" }}
    >
      <div className="bg-transparent p-12 rounded-lg shadow-lg max-w-md w-full ml-20 top-[40px] relative shadow-[#f0dca6] ">
        <div className="flex flex-col space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-transparent border-white border-2 px-2 py-3 rounded-lg"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="bg-transparent border-white border-2 px-2 py-3 rounded-lg"
          />

          <button
            type="submit"
            onClick={handleLogin}
            className="btn btn-primary font-bold bg-[#f0dca6] hover:bg-[#f0dca6c4] text-black px-4 py-2 rounded-lg "
          >
            Login
          </button>
          <p className="text-white text-sm flex justify-end">
            You dont have an account?{" "}
            <a
              href="./Signup"
              className=" text-blue-500 hover:text-[#f0dca6] px-2"
            >
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
