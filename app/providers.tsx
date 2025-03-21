"use client";
import React from "react";
import { PackageProvider } from "./context/PackageContext";
import { ErrorBoundary } from "./ErrorBoundary";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary>
      <PackageProvider>{children}</PackageProvider>
    </ErrorBoundary>
  );
};
