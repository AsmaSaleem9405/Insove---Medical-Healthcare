import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { department, doctor, fullName, phone, date, time } = body;

    // Validate required fields
    if (!department || !doctor || !fullName || !phone || !date || !time) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Configure the transporter using Gmail and your App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sends the email to yourself
      subject: `New Medical Appointment: ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #1fc5d4;">New Appointment Request</h2>
          <p>You have received a new appointment booking with the following details:</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0;" />
          <ul style="list-style: none; padding: 0;">
            <li><strong>Full Name:</strong> ${fullName}</li>
            <li><strong>Phone Number:</strong> ${phone}</li>
            <li><strong>Department:</strong> ${department}</li>
            <li><strong>Doctor:</strong> ${doctor}</li>
            <li><strong>Date:</strong> ${date}</li>
            <li><strong>Time:</strong> ${time}</li>
          </ul>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Appointment booked successfully and email sent!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { message: 'Failed to send appointment email. Please try again later.' },
      { status: 500 }
    );
  }
}