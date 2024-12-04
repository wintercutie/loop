export default function Page() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-light mb-6 font-montserrat">
        Montserrat Font Weights
      </h1>

      <div className="font-light text-2xl mb-4 font-montserrat">
        <strong>Light (300):</strong> This is the Light font weight.
      </div>

      <div className="font-normal text-2xl mb-4 font-montserrat">
        <strong>Regular (400):</strong> This is the Regular font weight.
      </div>

      <div className="font-medium text-2xl mb-4 font-montserrat">
        <strong>Medium (500):</strong> This is the Medium font weight.
      </div>

      <div className="font-semibold text-2xl mb-4 font-montserrat">
        <strong>SemiBold (600):</strong> This is the SemiBold font weight.
      </div>

      <div className="font-bold text-2xl mb-4 font-montserrat">
        <strong>Bold (700):</strong> This is the Bold font weight.
      </div>
    </div>
  );
}
