import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrderTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Button disabled variant="outline" size="sm">
            <Search className="h-3 w-3" />
            <span className="sr-only">Order details</span>
          </Button>
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-auto" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-auto" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-auto" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-auto" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-auto" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-auto" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-auto" />
        </TableCell>
      </TableRow>
    )
  })
}
