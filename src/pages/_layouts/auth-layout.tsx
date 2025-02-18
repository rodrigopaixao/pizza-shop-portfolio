import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="border-foreground/5 bg-muted text-muted-foreground flex h-full flex-col justify-between border-r p-10">
        <div className="text-foreground flex items-center gap-3 text-lg font-medium">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">pizza.shop</span>
        </div>
        <footer className="text-sm">
          <span>All rights reserved &copy;</span>
          <span>{new Date().getFullYear()}</span>
        </footer>
      </div>

      <div className="ju relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
