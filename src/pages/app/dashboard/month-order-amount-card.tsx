import { Utensils } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'

export function MonthOrderAmountCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Order total (Month)
        </CardTitle>
        <Utensils className="text-muted-foreground h-4 w-4" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">346</span>

        <p className="text-muted-foreground text-xs">
          <span className="dark: text-emerald-400 text-emerald-500">+%6</span>{' '}
          comparing to last month
        </p>
      </CardContent>
    </Card>
  )
}
