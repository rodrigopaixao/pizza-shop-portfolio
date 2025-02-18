import { Helmet } from 'react-helmet-async'

import { DayOrderAmountCard } from '@/pages/app/dashboard/day-order-amount-card.tsx'
import { MonthCanceledOrdersAmountCard } from '@/pages/app/dashboard/month-canceled-orders-amount-card.tsx'
import { MonthOrderAmountCard } from '@/pages/app/dashboard/month-order-amount-card.tsx'
import { MonthRevenueCard } from '@/pages/app/dashboard/month-revenue-card.tsx'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="fle flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrderAmountCard />
        <DayOrderAmountCard />
        <MonthCanceledOrdersAmountCard />
      </div>
    </>
  )
}
