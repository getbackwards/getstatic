$(document).ready(function(){

  // controls the drop down panels
  $(document).ready(function(){
        $("#drop-pane").click(function(){
          $(".drop-pane-wrapper").animate({
            marginTop: "-30" //
          });
          return false;
        });
        $(".shut-pane").click(function(){
          $(".drop-pane-wrapper").animate({
            marginTop: "-137px" //
          });
          return false;
        });
      });
  
});