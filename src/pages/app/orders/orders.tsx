import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getOrders } from '@/api/get-orders'
import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx'
import { OrderTableFilters } from '@/pages/app/orders/_components/order-table-filters.tsx'
import { OrderTableRow } from '@/pages/app/orders/_components/order-table-row'

export function Orders() {
  const { data: response } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  })

  return (
    <>
      <Helmet title="Orders" />
      <div className="fle flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
      </div>

      <div className="space-y-2.5">
        <OrderTableFilters />

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">ID</TableHead>
                <TableHead className="w-[180px]">Order At</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableCell>Client</TableCell>
                <TableHead className="w-[200px]">Total</TableHead>
                <TableHead className="w-[100px]"></TableHead>
                <TableHead className="w-[100px]"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {response &&
                response.orders.map((order) => {
                  return <OrderTableRow key={order.orderId} order={order} />
                })}
            </TableBody>
          </Table>
        </div>

        <Pagination pageIndex={0} perPage={10} totalCount={105} />
      </div>
    </>
  )
}
