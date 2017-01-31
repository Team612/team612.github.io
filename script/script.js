$(document).ready(function(){
  var count = 0;
  document.addEventListener('keydown', function(event){ //Konami Code
    switch(event.keyCode){
      case 38:
        if(count==0||count==1)count++; //Up arrow
        else count=0;
        break;
      case 40:
        if(count==2||count==3)count++; //Down arrow
        else count=0;
        break;
      case 37:
        if(count==4||count==6)count++; //Left Arrow
        else count=0;
        break;
      case 39:
        if(count==5||count==7)count++; //Right arrow
        else count=0;
        break;
      case 66:
        if(count==8)count++; //B
        else count=0;
        break;
      case 65:
        if(count==9)count++; //A
        else count = 0;
        break;
      case 13:
        if(count==10){ //Enter
          $("body").css("font-family", "Times New Roman");
          $("body").css("background", 'url("../img/logo.png")');
          $("body").css("background-size", "50% 50%");
          $(".navbar").css("background", 'url("../img/logo.png")');
          $(".navbar").css("background-size", "50% 50%");
          $("#logo").css("background-color", "white");
          $("#logo").css("background", 'url9"../img/logo.png")');
          $("#logo").css("background-size", "25% 25%");
          $("#logo").css("width", "20%");
          $("#logo").css("padding", "0 0 0 0");
          $("*").css("color", "black");
        }
        else count = 0;
        break;
      default:
        count = 0;
    }
  });

  var general = { //Object for each of the main content blocks
    link: "#genlink",
    body: "#general",
    isActive: false
  };

  var robot = {
    link: "#robotlink",
    body: "#robot",
    isActive: false
  };

  var vision = {
    link: "#visionlink",
    body: "#vision",
    isActive: false
  };

  var website = {
    link: "#weblink",
    body: "#website",
    isActive: false
  };

  var telemetry = {
    link: "#telelink",
    body: "#telemetry",
    isActive: false
  };

  var home = {
    link: "#homelink",
    body: "#home",
    isActive: true
  };

  var content=[home, general, robot, vision, website, telemetry];

  var isMoving = false;
  var parent = $("body");

  var changeLink = function(obj){ //Changes the content block that is currently displayed
    if(isMoving){
      for(var i=0;i<content.length;i++){
        if(content[i].isActive){
          parent.finish();
          break;
        }
      }
    }
    for(var i=0;i<content.length;i++){
      if(content[i].isActive){
        if(content[i]===obj)break; //If they click on the active one
        content[i].isActive = false;
        $(content[i].link).removeClass("active"); //Changes background of the navbar at the top
        $(obj.link).addClass("active");
        obj.isActive = true;
        isMoving = true;
        parent.queue(function(next){
          $(content[i].body).slideUp(500, next);
        });
        parent.queue(function(next){
          $(obj.body).slideDown(500, next);
        });
        break;
      }
    }
    if(parent.queue().length==0)isMoving = false; //Only want isMoving to be false if htere's no queueing animations
  }

  $("#homelink").click(function(){changeLink(home);});
  $("#genlink").click(function(){changeLink(general);});
  $("#robotlink").click(function(){changeLink(robot);});
  $("#visionlink").click(function(){changeLink(vision);});
  $("#weblink").click(function(){changeLink(website);});
  $("#telelink").click(function(){changeLink(telemetry);});
});
