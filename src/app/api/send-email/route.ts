import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email configuration
const emailConfig = {
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || "hfurqan.ai@gmail.com",
    pass: process.env.EMAIL_PASS || "",
  },
};

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, organization, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, email, and message are required",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || "hfurqan.ai@gmail.com",
      to: process.env.EMAIL_TO || "hfurqan.se@gmail.com",
      subject: "[Stickball Contact] New Contact Form Submission",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc; line-height: 1.6;">
          <div style="max-width: 600px; margin: 0 auto; padding: 16px;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 32px 24px; border-radius: 16px 16px 0 0; text-align: center; margin-bottom: 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h1 style="color: green; margin: 0; font-size: 30px; font-weight: 600; letter-spacing: -0.025em;">Stickball Contact</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px; font-weight: 400;">New Contact Form Submission</p>
            </div>

            <!-- Main Content -->
            <div style="background: white; padding: 32px 24px; border-radius: 0 0 16px 16px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
              
              <!-- Contact Information Section -->
              <div style="margin-bottom: 32px;">
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                  <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center; letter-spacing: -0.025em;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 12px;">
                      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#64748b"/>
                    </svg>
                    Contact Information
                  </h2>
                  <div>
                    <div>
                      <div style="color: #64748b; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Name</div>
                      <div style="color: #1e293b; font-weight: 500; font-size: 16px; padding: 12px; background: #f1f5f9; border-radius: 8px; border-left: 3px solid #3b82f6;">${name}</div>
                    </div>
                    <div style="margin-top: 10px;">
                      <div style="color: #64748b; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Email</div>
                      <a href="mailto:${email}" style="color: #3b82f6; font-weight: 500; font-size: 16px; padding: 12px; background: #f1f5f9; border-radius: 8px; border-left: 3px solid #3b82f6; text-decoration: none; display: block;">${email}</a>
                    </div>
                    ${
                      organization
                        ? `<div style="margin-top: 10px;">
                            <div style="color: #64748b; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Organization</div>
                            <div style="color: #1e293b; font-weight: 500; font-size: 16px; padding: 12px; background: #f1f5f9; border-radius: 8px; border-left: 3px solid #3b82f6;">${organization}</div>
                          </div>`
                        : ""
                    }
                  </div>
                </div>

                <!-- Message Section -->
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
                  <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center; letter-spacing: -0.025em;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 12px;">
                      <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="#64748b"/>
                    </svg>
                    Message
                  </h2>
                  <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                    <p style="margin: 0; line-height: 1.7; color: #334155; font-size: 15px; font-weight: 400;">${message.replace(
                      /\n/g,
                      "<br>"
                    )}</p>
                  </div>
                </div>
              </div>

              <!-- Footer -->
              <div style="text-align: center; padding: 24px 0 0; border-top: 1px solid #e2e8f0;">
                <div style="background: #f1f5f9; padding: 20px; border-radius: 8px;">
                  <p style="color: #64748b; margin: 0 0 8px 0; font-size: 13px; font-weight: 500;">
                    This message was sent from the Stickball contact form
                  </p>
                  <p style="color: #94a3b8; margin: 0; font-size: 12px; font-weight: 400;">
                    Sent at: ${new Date().toLocaleString()}
                  </p>
                </div>
              </div>

            </div>

            <!-- Bottom Spacer -->
            <div style="height: 16px;"></div>
          </div>

          <!-- Mobile Responsiveness -->
          <style>
            @media only screen and (max-width: 600px) {
              .mobile-container { padding: 12px !important; }
              .mobile-header { padding: 24px 16px !important; }
              .mobile-content { padding: 24px 16px !important; }
              .mobile-text { font-size: 14px !important; }
              .mobile-title { font-size: 20px !important; }
            }
          </style>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Contact Information:
Name: ${name}
Email: ${email}
${organization ? `Organization: ${organization}` : ""}

Message:
${message}

---
This message was sent from the Stickball contact form
Sent at: ${new Date().toLocaleString()}
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Email sending error:", error);

    return NextResponse.json(
      {
        error: "Failed to send email",
        details:
          process.env.NODE_ENV === "development"
            ? error
            : "Internal server error",
      },
      { status: 500 }
    );
  }
}

// Test email configuration
export async function GET() {
  try {
    // Verify transporter configuration
    await transporter.verify();

    return NextResponse.json({
      success: true,
      message: "Email configuration is valid",
      config: {
        host: emailConfig.host,
        port: emailConfig.port,
        secure: emailConfig.secure,
        user: emailConfig.auth.user,
      },
    });
  } catch (error) {
    console.error("Email configuration error:", error);

    return NextResponse.json(
      {
        error: "Email configuration is invalid",
        details:
          process.env.NODE_ENV === "development"
            ? (error as Error).message
            : "Configuration error",
      },
      { status: 500 }
    );
  }
}
