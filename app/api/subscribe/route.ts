import { NextRequest, NextResponse } from "next/server";

// Future: Newsletter subscription endpoint
// This is a placeholder for integration with email services like:
// - Resend
// - SendGrid
// - Mailchimp
// - ConvertKit
// - Hashnode newsletter

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Implement actual subscription logic
    // Example with Resend:
    // await resend.contacts.create({
    //   email,
    //   audienceId: process.env.RESEND_AUDIENCE_ID,
    // });

    // For now, just log and return success
    console.log(`Newsletter subscription request: ${email}`);

    return NextResponse.json({
      success: true,
      message: "Thanks for subscribing! (Demo mode)",
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}

// GET endpoint to check subscription status (future feature)
export async function GET() {
  return NextResponse.json({
    message: "Newsletter API - POST to subscribe",
    status: "ready",
  });
}
