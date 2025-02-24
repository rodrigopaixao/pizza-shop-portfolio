import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getDayOrderAmount } from '@/api/get-day-order-amount'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { MetricCardSkeleton } from '@/pages/app/dashboard/_components/metric-card-skeleton'

export function DayOrderAmountCard() {
  const { data: dayOrdersAmount } = useQuery({
    queryFn: getDayOrderAmount,
    queryKey: ['metrics', 'day-orders-amount'],
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
        {dayOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>

            <p className="text-muted-foreground text-xs">
              {dayOrdersAmount.diffFromYesterday >= 0 ? (
                <span className="dark: text-emerald-400 text-emerald-500">
                  +{dayOrdersAmount.diffFromYesterday}%
                </span>
              ) : (
                <span className="dark: text-rose-400 text-rose-500">
                  -{dayOrdersAmount.diffFromYesterday}%
                </span>
              )}{' '}
              comparing to yesterday
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
