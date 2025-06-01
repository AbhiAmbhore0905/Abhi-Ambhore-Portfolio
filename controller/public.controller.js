const asynchandler = require("express-async-handler")
const Notification = require("../model/Notification")
const sendEmail = require("../utils/email")

exports.sendNotification = asynchandler(async (req, res) => {
  const result = await Notification.create(req.body)
  await sendEmail({
    to: result.email,
    subject: "Thank You For Connecting With Me",
    message: `
<table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; padding: 30px; border-radius: 8px;">
        <tr>
          <td align="center" style="padding-bottom: 20px;">
            <h2 style="color: #333333;">Thank You for Reaching Out!</h2>
          </td>
        </tr>
        <tr>
          <td style="color: #555555; font-size: 16px; line-height: 1.6;">
            <p>Hi ${result.name},</p>
            <p>Thanks for getting in touch through my portfolio website. I’ve received your message and will respond as soon as possible.</p>
            <p>Feel free to connect with me in the meantime!</p>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 30px 0;">
            <a href="https://www.linkedin.com/in/abhijeet-ambhore-4b33a5252" style="text-decoration: none; background-color: #0077b5; color: white; padding: 12px 24px; border-radius: 5px; font-weight: bold; display: inline-block; margin-right: 10px;">LinkedIn</a>
            <a href="https://github.com/AbhiAmbhore0905" style="text-decoration: none; background-color: #333; color: white; padding: 12px 24px; border-radius: 5px; font-weight: bold; display: inline-block;">GitHub</a>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 10px 0;">
            <a href="https://https://www.linkedin.com/in/abhijeet-ambhore-4b33a5252" style="margin-right: 15px;">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="32" height="32" style="vertical-align: middle;">
            </a>
            <a href="https://github.com/OmkarYeske">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" width="32" height="32" style="vertical-align: middle;">
            </a>
          </td>
        </tr>
        <tr>
          <td style="color: #999999; font-size: 14px; text-align: center;">
            <p>— Abhijeet Ambhore <br/>Full Stack Developer</p>
            <p style="font-size: 12px;">Chhatrapati Sambhajinagar, India</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`
  })
  res.json({ message: "notification fetch success" })
})

