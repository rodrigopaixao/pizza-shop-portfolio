import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button.tsx'
import { TableCell, TableRow } from '@/components/ui/table.tsx'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="sm">
          <Search className="h-3 w-3" />
          <span className="sr-only">Order details</span>
        </Button>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        9238420934
      </TableCell>

      <TableCell className="text-muted-foreground">At 5 minutes</TableCell>

      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="text-muted-foreground font-medium">Pending</span>
        </div>
      </TableCell>

      <TableCell className="font-medium">Rodrigo Paixao</TableCell>

      <TableCell className="font-medium">$ 100</TableCell>

      <TableCell>
        <Button variant="outline" size="sm">
          <ArrowRight className="mr-2 h-3 w-3" />
          Approve
        </Button>
      </TableCell>

      <TableCell>
        <Button variant="ghost" size="sm">
          <X className="mr-2 h-3 w-3" />
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  )
}
