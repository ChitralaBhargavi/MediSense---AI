import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const medicines = [
    {
      name: "Paracetamol",
      time: "08:00 AM",
      status: "Pending",
    },
    {
      name: "Metformin",
      time: "02:00 PM",
      status: "Pending",
    },
    {
      name: "Vitamin D",
      time: "08:00 PM",
      status: "Pending",
    },
  ];

  return (
    <div
      style={{
        background: "#F4F8FB",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1>🩺 MediSense Dashboard</h1>

      <h3>Good Morning 👋</h3>

      <h2>Today's Medicines</h2>

      {medicines.map((medicine, index) => (
        <div
          key={index}
          style={{
            background: "white",
            marginTop: "15px",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{medicine.name}</h3>

          <p>Time : {medicine.time}</p>

          <p>Status : {medicine.status}</p>
        </div>
      ))}

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <button
          style={btn}
          onClick={() => navigate("/addmedicine")}
        >
          ➕ Add Medicine
        </button>

        <button
          style={btn}
          onClick={() => navigate("/scan")}
        >
          📷 Scan Medicine
        </button>

        <button
          style={btn}
          onClick={() => navigate("/history")}
        >
          📜 History
        </button>

        <button style={btn}>
          ⚙ Settings
        </button>
      </div>
    </div>
  );
}

const btn = {
  padding: "15px 25px",
  background: "#2563EB",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

export default Dashboard;