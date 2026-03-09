export const EMAIL_SENDER = {
  name: "Ritwik from SeekR",
  email: "ritwik@seek-r.life",
};

export const WELCOME_EMAIL = {
  subject: "Thanks for signing up!",
  htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to SeekR</title>
</head>
<body style="margin:0;padding:0;background-color:#0f172a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f172a;">
    <tr>
      <td align="center" style="padding:0;">
        <!-- Background image hero -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background-image:url('https://images.unsplash.com/photo-1764377722576-60611cd1d7b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwY2xpZmZzJTIwc3Vuc2V0JTIwc2VhJTIwZHJhbWF0aWMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcyNDU0MDExfDA&ixlib=rb-4.1.0&q=80&w=1080');background-size:cover;background-position:center;">
          <tr>
            <td style="padding:0;">
              <!-- Dark overlay -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(to bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.6));">
                <tr>
                  <td align="center" style="padding:48px 24px 20px;">
                    <img src="https://seekerassets.sfo3.cdn.digitaloceanspaces.com/seekr-webpage/SeekerLogo.png" alt="SeekR" height="70" style="display:block;height:70px;width:auto;" />
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:0 24px 48px;">
                    <!-- Card -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;background-color:rgba(0,0,0,0.35);border-radius:4px;">
                      <tr>
                        <td style="padding:36px 40px;">
                          <!-- Greeting -->
                          <p style="margin:0 0 16px;color:#ffffff;font-size:16px;line-height:1.6;">
                            Hi there,
                          </p>

                          <!-- Intro -->
                          <p style="margin:0 0 24px;color:rgba(255,255,255,0.9);font-size:16px;line-height:1.6;">
                            You're officially in the loop. We're busy perfecting the silent guide for your next great discovery.
                          </p>


                          <!-- Early access -->
                          <p style="margin:0 0 16px;color:rgba(255,255,255,0.9);font-size:16px;line-height:1.6;text-align:center;">
                              We'll tap you on the shoulder the second the doors are open.
                          </p>

                          <!-- Sign-off -->
                          <p style="margin:0 0 16px;color:rgba(255,255,255,0.9);font-size:16px;line-height:1.6;text-align:center;">
                           Until then, don't stop seeking...
                          </p>

                          <!-- Team SeekR -->
                          <p style="margin:0 0 20px;font-size:18px;font-weight:700;text-align:center;">
                            <span style="color:#f97316;">Your Fellow</span><span style="color:#ec4899;"> Seek-R</span>
                          </p>

                          <!-- PS -->
                          <p style="margin:0;color:rgba(255,255,255,0.5);font-size:12px;text-align:center;font-style:italic;line-height:1.6;">
                            P.S. Make sure to move this email to your 'Primary' inbox so you don't miss our beta launch!
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  textContent: `Hi there,

We're building an intelligent travel assistant that handles the 'admin' so you can focus on the adventure.

- No more spreadsheets: Ditch the 15+ browser tabs
- Just your vibe: Get a full itinerary in minutes, not hours

You're officially on the early access list for our beta. We'll ping you the second we go live.

See you at the boarding gate,
Team SeekR

P.S. Make sure to move this email to your 'Primary' inbox so you don't miss our beta launch!`,
};
