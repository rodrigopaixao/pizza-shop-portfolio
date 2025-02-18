import { api } from "@/lib/axios";

export interface GetManagedRestaurantResponse {
  id: string;
  name: string;
  description: string;
  managerId: string;
  createdAt: string;
  updatedAt: string;
}

export async function getManagedRestaurant(): Promise<GetManagedRestaurantResponse> {
  const response = await api.get<GetManagedRestaurantResponse>("/managed-restaurant");
  return response.data;
}
