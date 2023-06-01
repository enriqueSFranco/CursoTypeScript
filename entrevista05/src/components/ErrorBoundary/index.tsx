import { Component } from 'react'

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
  constructor(props: {}) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): { hasError: boolean } {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ hasError: true })
  }

  render(): React.ReactNode {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) return <h1>Oops!!! Something went wrong</h1>
    return <>{children}</>
  }
}
