import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu", // ATENȚIE: Dacă ești pe serverul US, pune smtp.zoho.com
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.ZOHO_USER,
      to: process.env.ZOHO_USER, 
      subject: `Formular Site Voltariss: ${name}`,
      html: `
        <h3>Mesaj Nou de pe Site</h3>
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Telefon:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Mesaj:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}