import { api } from "@/lib/axios";

export interface GetDailyRevenueInPeriodResponse {
  date: string;
  receipt: number;
}

export interface GetDailyRevenueInPeriodQuery {
  from?: Date;
  to?: Date;
}

export async function getDailyRevenueInPeriod({ from, to }: GetDailyRevenueInPeriodQuery) {
  const response = await api.get<GetDailyRevenueInPeriodResponse[]>("/metrics/daily-receipt-in-period", {
    params: {
      from: from?.toISOString(),
      to: to?.toISOString()
    }
  });

  return response.data;
}
