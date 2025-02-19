import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router'
import { z } from 'zod'

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
  const [searchParams, setSearchParams] = useSearchParams()
  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? 1)

  const { data: response } = useQuery({
    queryKey: ['orders', pageIndex],
    queryFn: () => getOrders({ pageIndex }),
  })

  function handlePaginationChange(page: number) {
    setSearchParams((prev) => {
      prev.set('page', (page + 1).toString())
      return prev
    })
  }

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

        {response && (
          <Pagination
            pageIndex={response.meta.pageIndex}
            perPage={response.meta.perPage}
            totalCount={response.meta.totalCount}
            onPageChange={handlePaginationChange}
          />
        )}
      </div>
    </>
  )
}
