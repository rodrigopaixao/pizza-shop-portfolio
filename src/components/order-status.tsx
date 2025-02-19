type OrderStatus = "pending" | "canceled" | "processing" | "delivering" | "delivered";

interface OrderProps {
  status: OrderStatus;
}

const orderStatusMapping: Record<OrderStatus, string> = {
  pending: "Pending",
  canceled: "Canceled",
  processing: "Processing",
  delivering: "Delivering",
  delivered: "Delivered"
};

export function OrderStatus({ status }: OrderProps) {
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}

      {status === "canceled" && (
        <span className="h-2 w-2 rounded-full bg-rose-500" />
      )}

      {status === "delivered" && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}

      {["processing", "delivering"].includes(status) && (
        <span className="h-2 w-2 rounded-full bg-slate-500" />
      )}

      <span className="text-muted-foreground font-medium">{orderStatusMapping[status]}</span>
    </div>
  );
}