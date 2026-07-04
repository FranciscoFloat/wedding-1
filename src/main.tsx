import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './styles.css'
import { WeddingLanding } from './components/wedding/WeddingLanding'
import { Toaster } from './components/ui/sonner'
import { TooltipProvider } from './components/ui/tooltip'
import { SmoothScroll } from './components/wedding/SmoothScroll'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <WeddingLanding />
      <SmoothScroll />
    </TooltipProvider>
  </QueryClientProvider>
)
