// DesignCard.jsx

import React from "react";
import SoundButton from "../../shared/buttons/SoundButton";
import { ArrowDownToLine } from "@gravity-ui/icons";

const DesignCard = ({ post, type = "free" }) => {
    const {title, image} = post;
  return (
    <div className="group mb-4 break-inside-avoid cursor-pointer">

      <div className="
        bg-white rounded-xl border border-[#EFEAE4]
        overflow-hidden transition-all duration-300
        hover:shadow-md
      ">

        {/* Image */}
        <div className="relative bg-[#FAF8F5] overflow-hidden">

          {/* Badge */}
          <span className={`
            absolute top-3 left-3 z-10
            text-[10px] px-3 py-1 rounded-full font-medium
            ${type === "free"
              ? "bg-[#E6F7F1] text-[#00897B]"
              : "bg-[#FFE8E3] text-[#E07A5F]"
            }
          `}>
            {type === "free" ? "FREE" : "PREMIUM"}
          </span>

          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="
              w-full h-auto object-contain
              transition-all duration-500 ease-out
              group-hover:scale-[1.03]
            "
          />

          {/* Hover Overlay */}
          <div className="
            absolute inset-0
            bg-black/0
            group-hover:bg-black/5
            transition duration-300
          " />

        </div>

        {/* Content */}
        <div className="p-3 space-y-2">

          <h3 className="text-[#1F1B16] text-sm font-medium line-clamp-2">
            {title}
          </h3>

          {/* CTA Buttons */}
          <div className="flex gap-2 mt-2">

            {type === "free" && (
              <button className="
                flex-1 text-xs font-medium
                bg-[#E07A5F] text-white
                py-2 rounded-md
                hover:bg-[#C9654C]
                transition
              ">
                Download Free
              </button>
            )}

            <div className="flex justify-center w-full">
                <SoundButton animationBgOne={'animate-ping'} leftIcon={<ArrowDownToLine />} className={'py-2'} text={'Download Free'} />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default DesignCard;