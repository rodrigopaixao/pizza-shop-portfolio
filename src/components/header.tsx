import { Home, Pizza, Utensils } from 'lucide-react'

import { NavLink } from '@/components/nav-link.tsx'
import { Separator } from '@/components/ui/separator.tsx'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Home
          </NavLink>

          <NavLink to="/orders">
            <Utensils className="h-4 w-4" />
            Orders
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
