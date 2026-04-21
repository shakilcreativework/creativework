const CategoryCard = ({ post }) => {
    const {title, image} = post;
  return (
    <div className="group cursor-pointer">

      <div className="relative rounded-xl overflow-hidden">

        <img
          src={image}
          className="w-full h-40 object-cover"
        />

        <div className="
          absolute inset-0 bg-black/40
          group-hover:bg-black/50 transition
        " />

        <h3 className="
          absolute bottom-4 left-4
          text-white text-lg font-medium
        ">
          {title}
        </h3>

      </div>

    </div>
  );
};

export default CategoryCard;