"use client"
import { BannerInterface } from "@/interfaces/banner";
import { BannerArray } from "../utils/banner";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="w-full bg-blue-600 py-8 px-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BannerArray.map((banner: BannerInterface) => (
          <div key={banner.id} className="flex flex-col items-center text-center">
            <div className=" mb-4">
              <Image 
                src={banner.image} 
                alt={banner.title} 
                width={40} 
                height={40}
              />
            </div>
            <h3 className="text-lime-300 font-bold text-xl mb-2">
              {banner.title.toUpperCase()}
            </h3>
            <p className="text-blue-100">
              {banner.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};