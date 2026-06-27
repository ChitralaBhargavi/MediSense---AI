import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.webp";

function Landing() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          color: "white",
          width: "500px",
        }}
      >
        <h1 style={{ fontSize: "45px", marginBottom: "10px" }}>
          💊 MediSense
        </h1>

        <h3>Smart Medicine Verification System</h3>

        <p style={{ marginTop: "20px", lineHeight: "28px" }}>
          Helping patients take the right medicine at the right time using
          AI-powered medicine verification.
        </p>

        <button
          onClick={() => navigate("/login")}
          style={{
            marginTop: "30px",
            padding: "15px 30px",
            fontSize: "18px",
            border: "none",
            borderRadius: "10px",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Landing;