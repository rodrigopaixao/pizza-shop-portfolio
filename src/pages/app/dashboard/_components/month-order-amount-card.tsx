import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthOrderAmount } from '@/api/get-month-order-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MetricCardSkeleton } from '@/pages/app/dashboard/_components/metric-card-skeleton'

export function MonthOrderAmountCard() {
  const { data: monthOrdersAmount } = useQuery({
    queryFn: getMonthOrderAmount,
    queryKey: ['metrics', 'month-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Order total (Month)
        </CardTitle>
        <Utensils className="text-muted-foreground h-4 w-4" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>

            <p className="text-muted-foreground text-xs">
              {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                <span className="dark: text-emerald-400 text-emerald-500">
                  +{monthOrdersAmount.diffFromLastMonth}%
                </span>
              ) : (
                <span className="dark: text-rose-400 text-rose-500">
                  {monthOrdersAmount.diffFromLastMonth}%
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
