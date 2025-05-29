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

  // ✅ Check for duplicates first
  const { data: existing, error: fetchError } = await supabase
    .from("waitlist")
    .select("email")
    .eq("email", email)
    .single();

  if (existing) {
    return NextResponse.json({ message: "You're already on the waitlist!" }, { status: 200 });
  }

  // ✅ Insert into Supabase
  const { error } = await supabase.from("waitlist").insert([{ email }]);

  if (error) {
    return NextResponse.json({ error: "Failed to register email. Try again." }, { status: 500 });
  }

  // ✅ Email HTML content
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Perspectra Waitlist</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #6b46c1; padding: 40px 20px; line-height: 1.6; margin: 0;">
  <div style="max-width: 500px; margin: 0 auto; background: #1f1937; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);">
    
    <!-- Hero Image -->
    <img src="https://github.com/swamimalode07/Waitlist-Perspectra/blob/main/public/banner.png?raw=true" alt="AI Perspectives" style="width: 100%; height: 200px; object-fit: cover; display: block;" />
    
    <!-- Main Content -->
    <div style="padding: 48px 40px; text-align: center;">
      <h1 style="font-size: 32px; font-weight: 700; color: white; margin: 0 0 16px 0;">You're on the Waitlist!</h1>
      
      <p style="font-size: 18px; color: #c4b5fd; margin: 0 0 32px 0;">
        Welcome to Perspectra. You'll be notified when we launch.
      </p>
      
      <!-- Contact Section -->
      <div style="margin-top: 40px;">
        <p style="color: #c4b5fd; font-size: 14px; margin: 0 0 8px 0;">For contact and info:</p>
        <a href="mailto:swamimalodeofficial@gmail.com" style="color: #a78bfa; text-decoration: none; font-size: 14px;">
          swamimalodeofficial@gmail.com
        </a>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="background: #0f0a1a; padding: 24px 40px; text-align: center;">
      <p style="font-size: 12px; color: #6b7280; margin: 0;">© 2025 Perspectra. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`;

  const plainText = `
You're in!

Your patience has paid off. We've been heads-down building Perspreta and onboarding new teams. And now we're ready for yours.

Create your account now: https://perspectra.live/signup

Note: We approve every domain individually. Please sign up with the email we sent this to.

- The Perspreta Team
`;

  // ✅ Send the email
  try {
    await resend.emails.send({
      from: "Perspreta Team <onboarding@perspectra.live>",
      to: email,
      subject: "You're on the waitlist!",
      html: htmlContent,
      text: plainText,
    });

    return NextResponse.json({ message: "Success! Confirmation email sent." }, { status: 200 });
  } catch (err: any) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send confirmation email." }, { status: 500 });
  }
}
