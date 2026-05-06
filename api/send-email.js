import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Missing fields",
      });
    }

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "alexlp1404@gmail.com",
      subject: "Nuevo mensaje desde el portfolio",
      html: `
        <h2>Nuevo mensaje de contacto</h2>

        <p><strong>Nombre:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Mensaje:</strong></p>

        <p>${message}</p>
      `,
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}
