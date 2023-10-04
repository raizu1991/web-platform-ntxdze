var arrySection = ['welcome', 'about', 'news', 'contact'];
var objtHeaderImage = {
  welcome:
    'https://as1.ftcdn.net/v2/jpg/05/51/71/34/1000_F_551713430_g6bIco99hXK9u9Slp0IDLrfFQUa3Iv9M.jpg',
  about:
    'https://as1.ftcdn.net/v2/jpg/03/12/76/56/1000_F_312765667_9K429dDroZy3yvqBCVDAr5ZBXODjTSbT.jpg',
  contact:
    'https://images.unsplash.com/photo-1678273114528-bd3ad3267030?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  news: 'https://as1.ftcdn.net/v2/jpg/04/40/20/68/1000_F_440206892_mMYCRWWhiKKGXJHkrS5zFGIUN5vxvYDY.jpg',
};

function nav_section(strgSection) {
  $(document).ready(function () {
    arrySection.forEach(function (item) {
      $('#' + item).hide();
      $('.jumbotron').css('background-image', 'url()');
    });
    $('#' + strgSection).show();
    $('#subtitle').html(strgSection.toUpperCase());

    $('.jumbotron').css(
      'background-image',
      'url(' + objtHeaderImage[strgSection] + ')'
    );

    if (strgSection == 'news') {
      var jsonurl = 'https://jsonplaceholder.typicode.com/posts';
      $.getJSON(jsonurl, function (jsondata) {
        console.log(jsondata);
        $('#table1').bootstrapTable({
          data: jsondata,
        });
      });
    }
  });
}
nav_section('welcome');
