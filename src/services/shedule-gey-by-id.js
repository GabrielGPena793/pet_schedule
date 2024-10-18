import { apiConfig } from "./api-config";

export async function scheduleGetById({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia.");
  }
}
