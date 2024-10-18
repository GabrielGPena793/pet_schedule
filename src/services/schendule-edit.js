import { apiConfig } from "./api-config";

export async function scheduleEdit({
  id,
  clientName,
  petName,
  typeConsultation,
  phone,
  when,
}) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientName,
        typeConsultation,
        petName,
        phone,
        when,
      }),
    });

    alert("Agendamento alterado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível alterar o agendamento!");
  }
}
