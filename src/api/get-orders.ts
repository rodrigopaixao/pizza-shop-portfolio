import { api } from "@/lib/axios";

export interface GetOrdersQuery {
  pageIndex: number;
  orderId: string | null;
  customerName: string | null;
  status: string | null;
}

export interface GetOrderResponse {
  orders: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered"
    customerName: string;
    total: number
  }[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
}

export async function getOrders({ pageIndex, orderId, status, customerName }: GetOrdersQuery) {
  const response = await api.get<GetOrderResponse>("/orders", {
    params: {
      pageIndex,
      orderId,
      status,
      customerName
    }
  });

  return response.data;
}
