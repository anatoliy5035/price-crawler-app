module.exports = function (emailLink) {
  return `
<div style="background-color:#fff;margin:0 auto 0 auto;padding:30px 0 30px 0;color:#4f565d;font-size:13px;line-height:20px;font-family:'Helvetica Neue',Arial,sans-serif;text-align:left;">
    <center>
 <table style="width:550px;text-align:center">
        <tbody>
          <tr>
            <td style="padding:0 0 20px 0;border-bottom:1px solid #e9edee;">
              <a href="https://www.xero.com/us/" style="display:block; margin:0 auto;" target="_blank">
                <img src="http://edge.xero.com/images/1.0.0/logo/xero-logo-200.png" width="75" height="75" alt="Xero logo" style="border: 0px;">
              </a>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="padding:30px 0;">
              <p style="color:#1d2227;line-height:28px;font-size:22px;margin:12px 10px 20px 10px;font-weight:400;">Hi Really Good Email</p>
              <p style="margin:0 10px 10px 10px;padding:0;">We'd like to make sure we got your email address right.</p>
              <p>
                <a style="display:inline-block;text-decoration:none;padding:15px 20px;background-color:#2baaed;border:1px solid #2baaed;border-radius:3px;color:#FFF;font-weight:bold;" href="${emailLink}" target="_blank">Confirm email</a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      </center>
      </div>
`;
};