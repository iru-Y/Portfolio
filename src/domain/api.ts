export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactForm(data: ContactFormData) {
  try {
    const response = await fetch("http://localhost:8080/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar formulário");
    }

    return await response.text(); 
  } catch (error) {
    console.error("Erro na API:", error);
    throw error;
  }
}
