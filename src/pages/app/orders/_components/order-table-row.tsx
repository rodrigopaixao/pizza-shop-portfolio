import { ArrowRight, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button.tsx";
import { Dialog, DialogTrigger } from "@/components/ui/dialog.tsx";
import { TableCell, TableRow } from "@/components/ui/table.tsx";
import { OrderDetails } from "@/pages/app/orders/_components/order-details.tsx";
import { OrderStatus } from "@/components/order-status";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder } from "@/api/cancel-order";
import { GetOrderResponse } from "@/api/get-orders";
import { approveOrder } from "@/api/approve-order";
import { deliverOrder } from "@/api/deliver-order";
import { dispatchOrder } from "@/api/dispatch-order";

export interface OrderTableRowParams {
  order: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  };
}

export function OrderTableRow({ order }: OrderTableRowParams) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const queryClient = useQueryClient();

  function updateOrderStatusOnCache(orderId: string, orderStatus: OrderStatus) {
    const ordersListCached = queryClient.getQueriesData<GetOrderResponse>({
      queryKey: ["orders"]
    });

    ordersListCached.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return;
      }

      queryClient.setQueryData<GetOrderResponse>(cacheKey, {
        ...cacheData,
        orders: cacheData.orders.map(order => {
          if (order.orderId === orderId) {
            return { ...order, status: orderStatus };
          }

          return order;
        })
      });
    });
  }

  const { mutateAsync: approveOrderFn, isPending: isApprovingOrder } = useMutation({
    mutationFn: approveOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, "processing");
    }
  });

  const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } = useMutation({
    mutationFn: cancelOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, "canceled");
    }
  });

  const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } = useMutation({
    mutationFn: dispatchOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, "delivering");
    }
  });

  const { mutateAsync: deliverOrderFn, isPending: isDeliveringOrder } = useMutation({
    mutationFn: deliverOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, "delivered");
    }
  });

  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Search className="h-3 w-3" />
              <span className="sr-only">Order details</span>
            </Button>
          </DialogTrigger>

          <OrderDetails orderId={order.orderId} open={isDetailsOpen} />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>

      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(new Date(order.createdAt), {
          locale: ptBR,
          addSuffix: true
        })}
      </TableCell>

      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>

      <TableCell className="font-medium">{order.customerName}</TableCell>

      <TableCell className="font-medium">{order.total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })}</TableCell>

      <TableCell>
        {order.status === "pending" && (
          <Button variant="outline" size="sm" disabled={isApprovingOrder}
                  onClick={() => approveOrderFn({ orderId: order.orderId })}>
            <ArrowRight className="mr-2 h-3 w-3" />
            Approve
          </Button>
        )}

        {order.status === "processing" && (
          <Button variant="outline" size="sm" disabled={isDispatchingOrder}
                  onClick={() => dispatchOrderFn({ orderId: order.orderId })}>
            <ArrowRight className="mr-2 h-3 w-3" />
            Delivering
          </Button>
        )}

        {order.status === "delivering" && (
          <Button variant="outline" size="sm" disabled={isDeliveringOrder}
                  onClick={() => deliverOrderFn({ orderId: order.orderId })}>
            <ArrowRight className="mr-2 h-3 w-3" />
            Delivered
          </Button>
        )}
      </TableCell>

      <TableCell>
        <Button variant="ghost" size="sm" disabled={
          !["pending", "processing"].includes(order.status) || isCancelingOrder
        }
                onClick={() => cancelOrderFn({ orderId: order.orderId })}>
          <X className="mr-2 h-3 w-3" />
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
}
