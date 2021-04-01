function sendEmail() {
Email.send({
    SecureToken : "5e3cec41-6d3c-4872-95d5-27650e5eb7ba",
    To : 'crystal.lim.usa@gmail.com',
    From : "crystalbb00@gmail.com",
    Subject : "Test email",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
}).then(
  message => alert(message)
);
}