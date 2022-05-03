export const welcomeMessage = (name, reg) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>2dsAcademy</title>
        
      </head>
      <body style="margin:0;padding:2rem;background-color:#fafafa;">
        <div class="container" style="background-color:white;border:1px solid transparent;border-radius:10px;border-top:18px solid #58468c;padding:1rem;">
          <h1 style="text-align:center;color:#58468c;text-transform:uppercase;letter-spacing:1.5;">2dsacademy</h1>
          <h3 style="text-transform:capitalize;color:#58468c;margin-bottom:1.5rem;">Dear ${name},</h3>
          <p style="line-height:1.7;color:#8579a6;margin-bottom:1rem;">
            We are using this opportunity to welcome you to 2dsacademy. The
            technology industry is a booming industry and we are happy that you
            choose us to help you start a successful career in the tech industry. Be
            rest assured that we will make your dream come true.
          </p>
          <p style="line-height:1.7;color:#8579a6;margin-bottom:1rem;">
            We will communicate to you when lectures start. Also, we want you to
            know that our team are working very hard to complete the student portal.
            Once its done, you can login to your portal and select a program.
          </p>
          <p style="line-height:1.7;color:#8579a6;margin-bottom:1rem;">
            Once again, thank you for choosing us and we hope to see you in class.
          </p>
          <h3 style="text-transform:capitalize;color:#58468c;margin-bottom:1.5rem;">Your Registration number is: ${reg}</h3>
          <p style="line-height:1.7;color:#8579a6;margin-bottom:1rem;">
            For more information, you can reply this mail or go to our
            <a href="">website</a> and fill the contact form.
          </p>
        </div>
      </body>
    </html>`;
};
export const contactMsg = (name, phone, email, message) => {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2dsacademy</title>
    
  </head>
  <body style="margin:0;padding:2rem;background-color:#fafafa;">
    <div class="container" style="background-color:white;border:1px solid transparent;border-radius:10px;border-top:18px solid #58468c;padding:1rem;">
      <h1 style="text-align:center;color:#58468c;text-transform:uppercase;letter-spacing:1.5;">2dsacademy</h1>
      <h3 style="text-transform:capitalize;color:#58468c;margin-bottom:1.5rem;">Contact Name: ${name}</h3>
      <h3 style="text-transform:capitalize;color:#58468c;margin-bottom:1.5rem;">Phone: ${phone}</h3>
      <h3 style="text-transform:capitalize;color:#58468c;margin-bottom:1.5rem;">Email: ${email}</h3>
      <p style="line-height:1.7;color:#8579a6;margin-bottom:1rem;">${message}</p>
    </div>
  </body>
</html>
    `;
};
