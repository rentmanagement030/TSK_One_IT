import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message, source = 'Website Contact Form' } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone number are required.' },
        { status: 400 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.EMAIL_TO || 'info@tskoneit.com';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
    const fromAddress = process.env.SMTP_FROM || `"TSK One IT Leads" <${smtpUser || 'leads@tskoneit.com'}>`;

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const cleanPhone = String(phone).replace(/[^\d+]/g, '');
    const waLink = `https://wa.me/${cleanPhone.replace('+', '')}`;

    // Elegant Branded HTML Email Template
    const htmlEmail = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New TSK One IT Inquiry</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f7fb; color: #1e293b; }
        .wrapper { width: 100%; max-width: 600px; margin: 24px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.07); border: 1px solid #e2e8f0; }
        .header { background: linear-gradient(135deg, #091e42 0%, #0c2f6d 50%, #0284c7 100%); padding: 32px 28px; text-align: left; }
        .brand-pill { display: inline-block; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: #ffffff; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }
        .title { color: #ffffff; font-size: 24px; font-weight: 900; margin: 0; letter-spacing: -0.02em; }
        .subtitle { color: #bae6fd; font-size: 13px; margin-top: 6px; font-weight: 500; }
        .content { padding: 32px 28px; }
        .grid { width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 24px; }
        .cell-label { width: 35%; padding: 12px 14px; background: #f8fafc; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e2e8f0; }
        .cell-value { width: 65%; padding: 12px 14px; background: #ffffff; font-size: 14px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #e2e8f0; }
        .highlight-service { display: inline-block; background: #e0f2fe; color: #0284c7; font-weight: 800; padding: 4px 10px; border-radius: 6px; font-size: 13px; border: 1px solid #bae6fd; }
        .notes-box { background: #f8fafc; border: 1px solid #cbd5e1; border-left: 4px solid #0284c7; border-radius: 8px; padding: 16px; margin: 20px 0; }
        .notes-title { font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; margin-bottom: 6px; }
        .notes-text { font-size: 14px; color: #1e293b; line-height: 1.5; white-space: pre-wrap; margin: 0; }
        .actions { margin: 28px 0 16px 0; text-align: center; }
        .btn { display: inline-block; padding: 12px 22px; border-radius: 8px; font-size: 13px; font-weight: 800; text-decoration: none; margin: 4px; text-transform: uppercase; letter-spacing: 0.05em; }
        .btn-call { background: #0284c7; color: #ffffff !important; }
        .btn-whatsapp { background: #22c55e; color: #ffffff !important; }
        .footer { background: #f1f5f9; padding: 20px 28px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <div class="brand-pill">TSK ONE IT &bull; INCOMING LEAD</div>
          <h1 class="title">New Customer Inquiry</h1>
          <div class="subtitle">Source: ${source} &bull; Received on ${timestamp}</div>
        </div>

        <div class="content">
          <table class="grid">
            <tr>
              <td class="cell-label">Customer / Org</td>
              <td class="cell-value">${name}</td>
            </tr>
            <tr>
              <td class="cell-label">Mobile Number</td>
              <td class="cell-value">
                <a href="tel:${cleanPhone}" style="color: #0284c7; text-decoration: none; font-weight: 800;">
                  ${phone}
                </a>
              </td>
            </tr>
            <tr>
              <td class="cell-label">Email Address</td>
              <td class="cell-value">
                ${email ? `<a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a>` : '<span style="color: #94a3b8; font-weight: normal;">Not provided</span>'}
              </td>
            </tr>
            <tr>
              <td class="cell-label">Service Interested</td>
              <td class="cell-value">
                <span class="highlight-service">${service || 'General Consultation'}</span>
              </td>
            </tr>
          </table>

          <div class="notes-box">
            <div class="notes-title">Requirements / Notes:</div>
            <p class="notes-text">${message ? message : 'No additional notes provided. Customer requested immediate callback or site visit.'}</p>
          </div>

          <div class="actions">
            <a href="tel:${cleanPhone}" class="btn btn-call">📞 Call Customer</a>
            <a href="${waLink}" class="btn btn-whatsapp" target="_blank">💬 Open WhatsApp</a>
          </div>
        </div>

        <div class="footer">
          <strong>TSK One IT Solutions</strong> &bull; Anna Salai, White Lane, Chennai<br>
          Automated Dispatch System &bull; Confidential
        </div>
      </div>
    </body>
    </html>
    `;

    // Plaintext fallback
    const plainText = `
    === NEW TSK ONE IT INQUIRY ===
    Source: ${source}
    Received: ${timestamp}

    Name / Org: ${name}
    Phone: ${phone}
    Email: ${email || 'N/A'}
    Service: ${service || 'General Consultation'}

    Requirements / Notes:
    ${message || 'No additional notes provided.'}

    Quick WhatsApp: ${waLink}
    `;

    // Check if SMTP is configured
    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: fromAddress,
        to: receiverEmail,
        replyTo: email && email.includes('@') ? email : undefined,
        subject: `🔔 [New Lead] ${name} - ${service || 'TSK One IT Consultation'}`,
        text: plainText,
        html: htmlEmail,
      });

      return NextResponse.json({
        success: true,
        message: 'Inquiry received and email dispatched successfully.',
      });
    } else {
      // SMTP not yet configured in .env.local - simulate and log to console
      console.log('----------------------------------------------------');
      console.log('📧 [TSK ONE IT LEAD DISPATCH - SIMULATION MODE]');
      console.log(`Destination: ${receiverEmail}`);
      console.log(`Customer: ${name} (${phone})`);
      console.log(`Email: ${email || 'N/A'}`);
      console.log(`Service: ${service}`);
      console.log(`Message: ${message}`);
      console.log('ℹ️ To send live emails, add SMTP_USER & SMTP_PASS in .env.local');
      console.log('----------------------------------------------------');

      return NextResponse.json({
        success: true,
        simulated: true,
        message: 'Inquiry received. Configure SMTP credentials in .env.local for live SMTP delivery.',
      });
    }
  } catch (error: any) {
    console.error('Error handling enquiry submission:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to process enquiry.' },
      { status: 500 }
    );
  }
}
