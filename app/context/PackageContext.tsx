"use client";

import React from "react";
import PackageService from "../services/packageService";
import { PackageInterface } from "@/interfaces/package";
const packageApi = new PackageService();

interface packageContextType {
  loading: boolean;
  error: unknown | null;
  packages: PackageInterface[];
  getPackages: () => Promise<void>;
}

export const PackageContext = React.createContext<packageContextType>({
  loading: false,
  error: null,
  packages: [],
  getPackages: async () => {},
});

interface PackageProviderProps {
  children: React.ReactNode;
}

export const PackageProvider: React.FC<PackageProviderProps> = ({
  children,
}) => {
  const [packages, setPackages] = React.useState<PackageInterface[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<unknown | null>(null);

  const getPackages = async () => {
    try {
      setLoading(true);
      const fetchedPackages = await packageApi.fetchPackage();
      setPackages(fetchedPackages);
    } catch (err) {
      setError(err);
      console.error("err at context", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PackageContext.Provider
      value={{
        loading,
        error,
        packages,
        getPackages,
      }}
    >
      {children}
    </PackageContext.Provider>
  );
};
