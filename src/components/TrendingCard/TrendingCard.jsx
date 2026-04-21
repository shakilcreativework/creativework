const TrendingCard = ({ post }) => {
    const {image, title} =post;
  return (
    <div className="group relative overflow-hidden rounded-xl">

      <img
        src={image}
        className="w-full h-auto object-cover"
      />

      {/* Gradient overlay */}
      <div className="
        absolute inset-0
        bg-linear-to-t from-black/60 to-transparent
      " />

      {/* Content */}
      <div className="absolute bottom-3 left-3 right-3 text-white">

        <h3 className="text-sm font-medium line-clamp-2">
          {title}
        </h3>

        <div className="flex gap-2 mt-2">
          <button className="text-xs bg-white text-black px-3 py-1 rounded">
            Free
          </button>
          <button className="text-xs bg-[#E07A5F] px-3 py-1 rounded">
            Premium
          </button>
        </div>

      </div>

    </div>
  );
};

export default TrendingCard;