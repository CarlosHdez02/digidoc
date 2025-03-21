"use client";
import React, { useEffect } from "react";
import { PackageContext } from "../context/PackageContext";

export const PackageCard = () => {
  const { packages, loading, error, getPackages } = React.useContext(PackageContext);

  useEffect(() => {
    getPackages();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading packages...</div>;
  }

  if (error) {
    return (
      <div className="text-center p-4 text-red-500">
        Error loading packages: {String(error)}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
      {packages.map((myPackage, index) => {
        const isLast = index === packages.length - 1;

        return (
          <div
            key={myPackage.id}
            className="border rounded-lg shadow-md overflow-hidden bg-blue-200 cursor-pointer 
                 hover:scale-105 transition-transform duration-300 flex flex-col h-full"
          >
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-blue-600 font-medium text-lg mb-2 text-center ">
                {myPackage.name}
              </h3>

              <hr className="my-3 border-gray-500" />

              <div className="flex justify-center items-baseline mb-4">{!isLast && ('$')}
                <h1 className="text-4xl font-extrabold text-black">
                  {myPackage.price}
                </h1>
                {!isLast && (
                  <span className="ml-2 font-semibold text-gray-600 text-sm">
                    +IVA/mes
                  </span>
                )}
              </div>

              <p
                className={`text-gray-600 mb-4 ${
                  isLast ? "line-clamp-2" : ""
                } flex-grow`}
              >
                {myPackage.description}
              </p>

              <div className="flex justify-center mt-auto">
                <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                  {myPackage.buttonDescription}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
