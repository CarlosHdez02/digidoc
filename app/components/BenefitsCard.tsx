"use client"
import { initialCardArray } from "../utils/initialCardContent";
import { InitialCardContent } from "@/interfaces/initialCardContent";
import Image from "next/image";

export const BenefitsCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {initialCardArray.map((card: InitialCardContent) => (
                <div 
                    key={card.id} 
                    className="flex flex-col items-center text-center p-6 rounded-lg shadow-xl hover:shadow-2xl bg-white border border-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                > 
                    <div className="mb-4">
                        <Image
                            src={card.image}
                            alt={card.description}
                            width={60}
                            height={60}
                        />
                    </div>
                    <p className="font-bold text-sm mb-2 justify-center">{card.description}</p>
                </div>
            ))}
        </div>
    )
}