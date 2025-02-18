import { createBrowserRouter } from 'react-router'

import { DashboardPage } from '@/pages/app/dashboard.tsx'
import { Signin } from '@/pages/auth/signin.tsx'

export const router = createBrowserRouter([
  { path: '/', element: <DashboardPage /> },
  { path: '/sign-in', element: <Signin /> },
])
