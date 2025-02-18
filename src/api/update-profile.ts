import { api } from "@/lib/axios";

interface UpdateProfile {
  name: string;
  description: string;
}

export async function updateProfile({ name, description }: UpdateProfile) {
  await api.put("/profile", {
    name,
    description
  });
}