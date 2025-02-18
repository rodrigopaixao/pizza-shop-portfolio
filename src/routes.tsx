import { createBrowserRouter } from 'react-router'

import { AppLayout } from '@/pages/_layouts/app-layout.tsx'
import { AuthLayout } from '@/pages/_layouts/auth-layout.tsx'
import { DashboardPage } from '@/pages/app/dashboard.tsx'
import { SignIn } from '@/pages/auth/sign-in.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
])
