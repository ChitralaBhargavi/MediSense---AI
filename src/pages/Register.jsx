import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration Successful!");

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
          width: "420px",
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#2563EB" }}>
          💊 MediSense AI
        </h1>

        <h2 style={{ textAlign: "center" }}>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleRegister} style={buttonStyle}>
          Register
        </button>

        <button style={googleButton}>
          Continue with Google
        </button>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Already have an account?{" "}
          <span
            style={{
              color: "#2563EB",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  borderRadius: "8px",
  border: "1px solid gray",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "20px",
  background: "#2563EB",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const googleButton = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  background: "white",
  border: "1px solid gray",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Register;