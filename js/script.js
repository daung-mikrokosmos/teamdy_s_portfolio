function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "daungmikrokosmos@gmail.com",
        Password "",
        To : 'daungmikrokosmos@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contect",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Subject: " + document.getElementById("subject").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent successfully")
    );
}