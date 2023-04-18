$(document).ready(function() {
    $('.sidebar li a').click(function(event) {
        $(this).parent().addClass('active').siblings().removeClass('active');
      event.preventDefault();
      var genre = $(this).data('genre');
      $.ajax({
        url: 'get_games.php',
        method: 'GET',
        data: { message: 'Hello' },
        success: function(response) {
          $('#games-list').html(response);
        },
        error: function(xhr, status, error) {
            console.log(error);
          }
      });
    });
  });
  