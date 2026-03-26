const QrCard = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <img
        src="/qr-code.svg"
        alt="QR Code"
        className="w-full h-auto rounded-lg"
      />
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-800">
          Improve your front-end skills by building projects
        </h2>
        <p className="text-gray-600 mt-2">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level.
        </p>
      </div>
    </div>
  );
};

export default QrCard;
