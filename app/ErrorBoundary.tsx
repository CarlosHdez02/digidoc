'use client'
import React from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error  in ErrorBoundary:', error, errorInfo)

  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="p-6 text-center text-red-600">
          <h2 className="text-2xl font-semibold mb-4">Pasó algo extraño.</h2>
          <p className="text-sm text-gray-600">Por favor intenta recargar la pagina o contact a soporte tecnico.</p>
        </div>
      )
    }

    return this.props.children
  }
}
