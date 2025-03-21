"use client"
import { PackageCard } from "./PackageCard";
import { useState } from "react";
import { X } from "lucide-react";

export const Packages = () => {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    setShowModal(true);
    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setShowModal(false);
    // Re-enable scrolling on the body when modal is closed
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        {/* Centered text */}
        <h1 className="text-center text-xl mb-6 max-w-3xl">
         ¿Quieres cambiar a tú conta? Nosotros nos encargamos de llevar a cabo
         la transicion de toda tu contabilidad hasta el dia de hoy.
        </h1>

        {/* Buttons row */}
        <div className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-3xl mx-auto">
          <button
            className="cursor-pointer w-full px-6 py-3 bg-lime-400 text-white font-medium rounded-lg hover:bg-lime-500 transition-colors"
            onClick={openModal}
          >
            Ver paquetes
          </button>
          <button 
            className="cursor-pointer w-full px-6 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-colors"
          >
            Agenda una cita con un contador experto
          </button>
        </div>
      </div>
      
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          {/* Modal content - stop propagation to prevent closing when clicking inside */}
          <div 
            className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-6xl max-h-[90vh] overflow-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header with close button */}
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-10 pb-2 border-b">
              <h2 className="text-xl sm:text-2xl font-bold">Nuestros Paquetes</h2>
              <button onClick={closeModal} className="p-1 rounded-full hover:bg-gray-100 cursor-pointer">
                <X size={24} />
              </button>
            </div>
            
            {/* Modal body */}
          
              <PackageCard />
            </div>
        
        </div>
      )}
    </div>
  );
};