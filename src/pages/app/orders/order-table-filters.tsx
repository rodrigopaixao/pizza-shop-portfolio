import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx'

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filters</span>
      <Input placeholder="Client name" className="h-8 w-auto" />
      <Input placeholder="Order ID" className="h-8 w-[320px]" />

      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[100px]">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="canceled">Canceled</SelectItem>
          <SelectItem value="processing">In Progress</SelectItem>
          <SelectItem value="delivering">Delivering</SelectItem>
          <SelectItem value="delivered">Delivered</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" size="sm" variant="secondary">
        <Search className="mr-2 h-4 w-4" />
        Filter
      </Button>

      <Button variant="outline" type="submit" size="sm">
        <X className="mr-2 h-4 w-4" />
        Reset
      </Button>
    </form>
  )
}
