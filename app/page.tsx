"use client"
import { Banner } from "./components/Banner";
import { Benefits } from "./components/Benefits";
import { BenefitsCard } from "./components/BenefitsCard";
import { PackageCard } from "./components/PackageCard";
import { Packages } from "./components/Packages";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header section */}
      <div className="text-center my-12 relative">
  <div className="flex justify-center items-baseline">
    <h1 className="text-4xl font-bold">Tu</h1>
    <h1 className="text-5xl text-blue-600 ml-2">Conta</h1>
  </div>
  
  <h3 className="text-xl text-gray-600 mt-1 ml-26">Tu contador en linea</h3>
  
  <p className="font-medium mt-4">!Nuevo servicio!</p>
  
  <p className="mt-2">Encargate de tu negocio, nosotros de la contabilidad</p>
</div>
      
      {/* BenefitsCard section */}
      <section className="mb-3">
        <BenefitsCard />
      </section>
      
      {/* Benefits section */}
      <section className="mb-3">
        <Benefits />
      </section>
      
      {/* Banner section */}
      <section className="mb-3">
        <Banner />
      </section>
      <section className="mb-3">
        <Packages />
      </section>
    </div>
  );
}