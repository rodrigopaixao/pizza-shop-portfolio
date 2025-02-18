import { useQuery } from '@tanstack/react-query'
import { Building, ChevronDown, LogOut } from 'lucide-react'

import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import { getProfile } from '@/api/get-profile'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'

export function AccountMenu() {
  const { data: profile, isLoading: isLoadingAccountProfile } = useQuery({
    queryKey: ['accountProfile'],
    queryFn: getProfile,
  })

  const { data: restaurant, isLoading: isLoadingRestaurant } = useQuery({
    queryKey: ['managedRestaurant'],
    queryFn: getManagedRestaurant,
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none"
        >
          {isLoadingRestaurant ? (
            <Skeleton className="h-4 w-40" />
          ) : (
            restaurant?.name
          )}
          <ChevronDown className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          {isLoadingAccountProfile ? (
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="24 h-4" />
            </div>
          ) : (
            <>
              <span>Rodrigo Paixao</span>
              <span className="text-muted-foreground text-sm">
                {profile?.email}
              </span>
            </>
          )}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4" />
          <span>Orders</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
