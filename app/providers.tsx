"use client"
import React from "react"
import { PackageProvider } from "./context/PackageContext"

export const Providers = ({children}: {children:React.ReactNode})=>{

    return(
        <PackageProvider>
            {children}
        </PackageProvider>
    )
}