"use client"
import { BenefitsInterface } from "@/interfaces/benefits"
import { benefitsArray } from "../utils/benefits"
import { Video } from "./Video"
import { CheckCircle } from "lucide-react"

export const Benefits = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
   
        <div className="flex justify-center">
          <Video />
        </div>
        
 
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Beneficios</h2>
          <div className="grid grid-cols-1 gap-6">
            {benefitsArray.map((benefit: BenefitsInterface) => (
              <div key={benefit.id} className="flex items-start">
                <div className="mr-4 text-green-500 flex-shrink-0 mt-1">
                  <CheckCircle color="blue" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}