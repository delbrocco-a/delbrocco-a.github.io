
document.addEventListener("DOMContentLoaded", function loadContent() {
  let confirmation = new String(); 

  if(localStorage.getItem("full-name") == null) {
    confirmation = confirmation.concat(
      "You haven't submitted any details for me to contact you with during ",
      "this session. Please continue to the contact section on the nav bar ",
      "to give me your details for me to contact you with, and content ",
      "your request will appear here. "
    ); 
  } else {

    let moContact = new String();

    if(localStorage.getItem("mo-contact") == "email") {
      moContact = moContact.concat(
        "sent to your provided email: ",
        localStorage.getItem("email"), ". "
      );
    } else {
      moContact = moContact.concat(
        "provided to you by telephone to your provided number: ",
        localStorage.getItem("tel"), ". "
      );
    }

    confirmation = confirmation.concat(
      "Thank you ", localStorage.getItem("full-name"), " ",
      "Your submission has been recieved and is being processed as you read this. ",
      "A response will be ", moContact, "In the meantime, please feel free to ",
      "explore more of my website, or submit another response if the details ",
      "above are incorrect."
    );

    console.log(confirmation);
  }

  document.getElementById("confirmation").innerHTML = confirmation;

});


