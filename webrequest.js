function webrequest_signin(objtData) {
  console.log(objtData);
  var request = $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'POST',
    data: objtData,
    dataType: 'json',
  });
  request.done(function (msg) {
    $('div.spanner').hide();
    $('div.overlay').hide();
    console.log(msg);
  });
  request.fail(function (jqXHR, textStatus) {
    $('div.spanner').hide();
    $('div.overlay').hide();
    console.log('failed status: ' + textStatus);
    console.log('jqXHR:', jqXHR.responseText);
  });
}
