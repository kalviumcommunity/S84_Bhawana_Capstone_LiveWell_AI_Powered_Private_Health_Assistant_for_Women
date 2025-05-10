function HealthTipCard({ title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 my-4">
      <h2 className="text-xl font-semibold text-pink-800">{title}</h2>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
}
export default HealthTipCard;