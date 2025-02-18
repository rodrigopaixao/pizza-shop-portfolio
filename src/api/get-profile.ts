import { api } from "@/lib/axios";

export interface GetProfileResponse {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "manager" | "customer",
  createdAt: string;
  updatedAt: string;
}

export async function getProfile(): Promise<GetProfileResponse> {
  const response = await api.get<GetProfileResponse>("/me");
  return response.data;
}
