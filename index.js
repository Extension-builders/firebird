$(function(){
  
  var activated = false;
  var currentOpacity = 0;
  
  $(window).keydown(function(e){
    if(event.ctrlKey){
      if(e.keyCode === 13){
        activated = !activated;
        conceal();
      }
    }
    if(e.keyCode >= 49 && e.keyCode <= 57){
      var opacity = "0." + (e.keyCode - 48);
      console.log(opacity);
      changeOpacity(opacity);
    }
    if(e.keyCode === 48){
      changeOpacity(1);
    }
  });
  
  function changeOpacity(o){
    currentOpacity = o;
    $("#img-conceal").css("opacity", o);
  }
  
  function conceal(){
    $("body").append("<div id='img-conceal'></div>");
    $("#img-conceal").css("background-image", "url(" + chrome.extension.getURL('concealer.png')+")");
    if(activated){
      changeOpacity(1);
      $("#img-conceal").css("display", "block");
    }else{
      $("#img-conceal").css("display", "none");
    };
  };
    
  $("body").append("<div id='img-conceal'></div>");
  $("#img-conceal").css("display", "block");
})