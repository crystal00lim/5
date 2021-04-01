function sendEmail() {
Email.send({
    SecureToken : "b10ed9cf-1bb7-47f8-a154-819d1617efb7",
    Username : "crystalbb00@gmail.com",
    Password : "Phantomh1ve",
    Host : "smtp-relay.gmail.com",
    To : 'crystal.lim.usa@gmail.com',
    From : "crystalbb00@gmail.com",
    Subject : "Test email",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
}).then(
  message => alert(message)
);
}