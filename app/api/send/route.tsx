// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
let fromEmail: string = process.env.FROM_EMAIL || "";

export async function POST(req: Request, Res: Response) {
  // const { body } = req;
  // const { email, subject, message } = body;
  const { email, subject, message } = await req.json();
  console.log(email + subject + message);

  try {
    // console.log(email);
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["phornphatmak1112@gmail.com" + email],
      subject: subject,
      react: (
        <>
          <p>Thank you for contacting us!</p>
          <p>New message submitted: {message} </p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
