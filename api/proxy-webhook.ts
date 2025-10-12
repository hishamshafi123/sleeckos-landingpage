import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const { url, name, email, phone, timestamp, source } = req.body;

    // Validate required fields
    if (!url || !name || !email || !phone) {
      console.error("Missing required fields:", { url: !!url, name: !!name, email: !!email, phone: !!phone });
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    // Validate URL format
    let webhookUrl: URL;
    try {
      webhookUrl = new URL(url);

      // Only allow HTTPS for security (except localhost for development)
      if (webhookUrl.protocol !== "https:" && !webhookUrl.hostname.includes("localhost")) {
        console.error("Invalid protocol - only HTTPS allowed:", webhookUrl.protocol);
        return res.status(400).json({
          success: false,
          message: "Invalid webhook URL - only HTTPS is allowed"
        });
      }
    } catch (urlError) {
      console.error("Invalid URL format:", url, urlError);
      return res.status(400).json({
        success: false,
        message: "Invalid webhook URL format"
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format:", email);
      return res.status(400).json({
        success: false,
        message: "Invalid email format"
      });
    }

    console.log("Forwarding webhook request to:", webhookUrl.toString());

    // Forward the request to the webhook URL with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout for Vercel

    try {
      const response = await fetch(webhookUrl.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          timestamp: timestamp || new Date().toISOString(),
          source: source || "landing_page_form"
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        let data;
        try {
          data = await response.text();
        } catch (readError) {
          console.warn("Could not read response body:", readError);
          data = null;
        }

        console.log("Webhook forwarded successfully:", response.status);
        return res.status(200).json({
          success: true,
          message: "Webhook sent successfully",
          data: data || null
        });
      } else {
        const errorText = await response.text().catch(() => "No error details");
        console.error("Webhook forwarding failed:", {
          status: response.status,
          statusText: response.statusText,
          body: errorText
        });
        return res.status(response.status).json({
          success: false,
          message: `Webhook forwarding failed: ${response.status} ${response.statusText}`
        });
      }
    } catch (fetchError: any) {
      clearTimeout(timeoutId);

      if (fetchError.name === 'AbortError') {
        console.error("Webhook request timeout");
        return res.status(504).json({
          success: false,
          message: "Webhook request timeout"
        });
      }

      throw fetchError;
    }
  } catch (error: any) {
    console.error("Proxy webhook error:", {
      message: error?.message,
      stack: error?.stack,
      name: error?.name
    });
    return res.status(500).json({
      success: false,
      message: "Internal server error while forwarding webhook"
    });
  }
}
