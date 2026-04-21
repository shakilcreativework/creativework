import React from 'react';

const FreeCard = ({post}) => {
    const {image} = post;
    return (
        <div className="group">

      <div className="
        bg-white rounded-xl border border-[#EFEAE4]
        overflow-hidden hover:shadow-md transition
      ">

        <div className="relative bg-[#FAF8F5]">

          <span className="
            absolute top-3 left-3
            bg-[#E6F7F1] text-[#00897B]
            text-[10px] px-3 py-1 rounded-full font-medium
          ">
            FREE
          </span>

          <img
            src={image}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="p-3">
          <button className="
            w-full bg-[#E07A5F] text-white
            py-2 rounded-md text-sm font-medium
            hover:bg-[#C9654C]
          ">
            Download Free
          </button>
        </div>

      </div>

    </div>
    );
};

export default FreeCard;