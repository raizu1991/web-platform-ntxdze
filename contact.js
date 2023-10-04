function contact_sendmessage() {
  var contact_name = $('#contact_name').val();
  var contact_email = $('#contact_email').val();
  var contact_message = $('#contact_message').val();
  var objtData = {
    name: contact_name,
    email: contact_email,
    message: contact_message,
  };

  localrequest_sendmessage(objtData);
  //webrequest_sendmessage(objtData);
}
