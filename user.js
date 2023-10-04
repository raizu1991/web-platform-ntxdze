function user_signin() {
  $(document).ready(function () {
    var email = $('#signin_username').val();
    var password = $('#signin_password').val();

    var objtData = {
      email: email,
      password: password,
    };

    $('div.spanner').addClass('show');
    $('div.overlay').addClass('show');

    $('div.spanner').show();
    $('div.overlay').show();

    webrequest_signin(objtData);
  });
}

function user_signup() {
  console.log('signup');
  $(document).ready(function () {
    console.log(
      $('#signup_username').val() +
        ' ' +
        $('#signup_password').val() +
        ' ' +
        $('#signup_confirmpassword').val()
    );
  });
}
