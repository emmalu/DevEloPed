(function($){
    $(function(){
      M.AutoInit();
      $('.sidenav').sidenav();
      $('.parallax').parallax();
      $('.modal').modal();
      $('.carousel').carousel({
        padding: 10,
        dist: -50
      });
    }); // end of document ready
  })(jQuery); // end of jQuery name space