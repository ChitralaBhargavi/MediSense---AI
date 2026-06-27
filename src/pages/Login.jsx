import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "#EAF6FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#2563EB" }}>
          🩺 MediSense AI
        </h1>

        <h2 style={{ textAlign: "center" }}>Welcome Back</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            borderRadius: "8px",
            border: "1px solid gray",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "8px",
            border: "1px solid gray",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            background: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Login
        </button>

        <button
          style={{
            width: "100%",
            marginTop: "15px",
            padding: "12px",
            background: "white",
            border: "1px solid gray",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Continue with Google
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            style={{
              color: "#2563EB",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;