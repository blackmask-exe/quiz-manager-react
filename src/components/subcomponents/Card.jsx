const Card = ({ image, heading, description, ...props }) => {
  return (
    <div
      {...props}
      className="max-w-sm rounded-lg overflow-hidden border border-gray-800 bg-[#000000] shadow-lg shadow-gray-800/20 cursor-pointer hover:scale-105
"
    >
      <div className="w-full h-64 flex items-center justify-center p-6">
        {image}
      </div>
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-white">{heading}</h3>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
