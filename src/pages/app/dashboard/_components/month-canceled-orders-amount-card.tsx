import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthCanceledOrderAmount } from '@/api/get-month-canceled-amount'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { MetricCardSkeleton } from '@/pages/app/dashboard/_components/metric-card-skeleton'

export function MonthCanceledOrdersAmountCard() {
  const { data: monthCanceledOrderAmount } = useQuery({
    queryFn: getMonthCanceledOrderAmount,
    queryKey: ['metrics', 'month-canceled-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Monthly Canceled
        </CardTitle>
        <DollarSign className="text-muted-foreground h-4 w-4" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthCanceledOrderAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrderAmount.amount.toLocaleString('pt-BR')}
            </span>

            <p className="text-muted-foreground text-xs">
              {monthCanceledOrderAmount.diffFromLastMonth >= 0 ? (
                <span className="dark: text-emerald-400 text-emerald-500">
                  +{monthCanceledOrderAmount.diffFromLastMonth}%
                </span>
              ) : (
                <span className="dark: text-rose-400 text-rose-500">
                  {monthCanceledOrderAmount.diffFromLastMonth}%
                </span>
              )}{' '}
              comparing to last month
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
