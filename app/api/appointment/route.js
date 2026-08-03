import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const { department, doctor, fullName, phone, date, time } = body;

    // Basic validation
    if (!department || !doctor || !fullName || !phone || !date || !time) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        {
          success: false,
          message: "EMAIL_USER or EMAIL_PASS is missing in environment variables.",
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Appointment Request: ${fullName}`,
      html: `
        <h2>New Patient Appointment Request</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Doctor:</strong> ${doctor}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Appointment booked and email sent successfully!",
    });
  } catch (error) {
    console.error("APPOINTMENT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong.",
      },
      { status: 500 }
    );
  }
}