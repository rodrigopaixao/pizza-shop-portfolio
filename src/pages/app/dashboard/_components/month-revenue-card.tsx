import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthRevenueCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Income total (Month)
        </CardTitle>
        <DollarSign className="text-muted-foreground h-4 w-4" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">$1000</span>

        <p className="text-muted-foreground text-xs">
          <span className="dark: text-emerald-400 text-emerald-500">+%2</span>{' '}
          comparing to last month
        </p>
      </CardContent>
    </Card>
  )
}
