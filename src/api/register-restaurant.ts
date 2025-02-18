import { api } from "@/lib/axios";

export interface RegisterRestaurantRequest {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function registerRestaurant({ restaurantName, managerName, email, phone }: RegisterRestaurantRequest) {
  await api.post("/authenticate", {
    restaurantName,
    managerName,
    email,
    phone
  });
}
