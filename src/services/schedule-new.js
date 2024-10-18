import { apiConfig } from "./api-config";

export async function scheduleNew({
  id,
  clientName,
  petName,
  typeConsultation,
  phone,
  when,
}) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        clientName,
        typeConsultation,
        petName,
        phone,
        when,
      }),
    });

    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar o horário!");
  }
}
