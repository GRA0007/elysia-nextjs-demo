'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const makeQueryClient = () => new QueryClient()

let browserQueryClient: QueryClient | undefined = undefined

const getQueryClient = () => {
  if (typeof window === 'undefined') return makeQueryClient()

  if (!browserQueryClient) browserQueryClient = makeQueryClient()
  return browserQueryClient
}

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
