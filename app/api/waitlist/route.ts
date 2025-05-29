import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const email = body.email;

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }

  const { error } = await supabase.from("waitlist").insert([{ email }]);

  if (error) {
    return NextResponse.json({ error: "Email might already be registered." }, { status: 400 });
  }

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Perspreta</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; padding: 40px 20px; line-height: 1.6;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
    <img src="/image.png" alt="Team collaboration" style="width: 100%; height: 240px; object-fit: cover; display: block;" />
    <div style="padding: 48px 40px; text-align: center;">
      <h1 style="font-size: 36px; font-weight: 600; color: #1a202c; margin-bottom: 24px; letter-spacing: -0.01em;">You're in!</h1>
      <p style="font-size: 18px; color: #4a5568; margin-bottom: 32px; line-height: 1.5;">
        Your patience has paid off. We've been heads-down building Perspreta and onboarding new teams. And now we're ready for yours.
      </p>
      <p style="font-size: 16px; color: #718096; line-height: 1.6; margin-bottom: 40px; max-width: 480px; margin-left: auto; margin-right: auto;">
        Perspreta is a new product that helps teams build better insights and more effective data perspectives in less time. During our beta, we're looking for people who are eager to try new software with their teams and give feedback on their experience. Is that you? Great, then let's get started!
      </p>
      <a href="#" style="display: inline-block; background-color: #4c51bf; color: white; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 16px; margin-bottom: 32px;">Create your account</a>
      <div style="font-size: 14px; color: #718096; background-color: #f7fafc; padding: 16px; border-radius: 8px; border-left: 3px solid #4c51bf;">
        <strong>Note:</strong> We approve every domain individually. Make sure you sign up with the one we sent this email to!
      </div>
    </div>
    <div style="background-color: #f8fafc; padding: 32px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="font-size: 13px; color: #a0aec0; margin-bottom: 4px;"><strong>© 2025 Perspreta.</strong> All rights reserved.</p>
      <p style="font-size: 13px; color: #a0aec0;">This email was sent to you because you signed up for Perspreta beta access.</p>
    </div>
  </div>
</body>
</html>`;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "You're on the waitlist!",
      html: htmlContent,
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (err: any) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send confirmation email." }, { status: 500 });
  }
}
