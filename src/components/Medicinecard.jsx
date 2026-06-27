export default function MedicineCard({ name, time, status }) {
  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="font-bold">{name}</h2>
      <p className="text-gray-500">{time}</p>
      <p className="text-sm">{status}</p>
    </div>
  );
}
