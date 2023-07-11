"use client"
import { QueryClient, QueryClientProvider } from 'react-query'
import HomeContainer from '../components/homeContainer/homeContainer';

export default function Home() {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <HomeContainer />
      </main>
    </QueryClientProvider>
  )
}
