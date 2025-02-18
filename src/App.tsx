import './index.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router/dom'
import { Toaster } from 'sonner'

import { router } from '@/routes.tsx'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Shop" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
