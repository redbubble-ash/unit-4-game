var character = [{ name: "DarthVader", image: "assets/images/darthVader.png", HP: 160, attackPower: 20, counterattackPower: 30},
{ name: "BB8", image: "assets/images/bb8.png", HP: 180, attackPower: 30, counterattackPower: 40 },
{ name: "Yoda", image: "assets/images/yoda.png", HP: 120, attackPower: 10, counterattackPower: 20 },
{ name: "Rey", image: "assets/images/rey.png", HP: 150, attackPower:15, counterattackPower:25 }];

var characterImage = "";
var characterName = "";
var hpLevel = "";
var attackPower = "";
var newAttackPower = 0;
var t = 0;
var defenderImage = ["","",""];
var defenderNmae = ["","",""];
var defenderHP = ["","",""];
var defenderAttackPower = ["","",""];
var defenderCounterAttackPower = ["","",""];



$(document).ready(function () {
  $(".img-frame-cap2").hide();
  var hideThirdSection = $(".thirdSection").detach();
  $(".img-frame-cap4").hide();

  // choose a fighter by clicking an image
  $(".img-frame-cap").on("click", function () {
    $(".firstSection").remove();
    // get data-id for the clicked character
    var characterID = $(this).attr("data-id");

    // get image link for the clicked character
    for (i = 0; i < character.length; i++) {
      if (characterID === character[i].name) {
          characterImage = character[i].image;
          characterName = character[i].name;
          attackPower = character[i].attackPower;
          hpLevel = character[i].HP;
          
      }
      // git image link for defender characters
      else {
        defenderImage[t] = character[i].image;
        defenderNmae[t] = character[i].name;
        defenderHP[t]= character[i].HP;
        defenderAttackPower[t] = character[i].attackPower;
        defenderCounterAttackPower[t] = character[i].counterattackPower;
        t++;

      }

    }
  
    // add image link, name & hp level for the clicked character to your character section
    $(".img-frame-cap2").show();

    $(".img-frame-cap2 img").attr({
      "src": characterImage,
      "alt": characterID
    });
   
   $(".img-frame-cap2 .CharacterName").html(characterName);
   $(".img-frame-cap2 .HP").html(hpLevel);


   // add image link, name & hp level for defender characters to your defender section
    $("section").prepend(hideThirdSection);

    $(".img-frame-cap3-1 img").attr("src", defenderImage[0]);
    $(".img-frame-cap3-1 .CharacterName").html(defenderNmae[0]);
    $(".img-frame-cap3-1 .HP").html(defenderHP[0]);

    $(".img-frame-cap3-2 img").attr( "src", defenderImage[1],);
    $(".img-frame-cap3-2 .CharacterName").html(defenderNmae[1]);
    $(".img-frame-cap3-2 .HP").html(defenderHP[1]);

    $(".img-frame-cap3-3 img").attr("src", defenderImage[2]);
    $(".img-frame-cap3-3 .CharacterName").html(defenderNmae[2]);
    $(".img-frame-cap3-3 .HP").html(defenderHP[2]);

    // choose defender by clicking an image from enemies available list
    $(".img-frame-cap3-1").on("click", function(){
      $(".img-frame-cap4 img").attr("src", defenderImage[0]);
      $(".img-frame-cap4 .CharacterName").html(defenderNmae[0]);
      $(".img-frame-cap4 .HP").html(defenderHP[0]);
      $(".img-frame-cap3-1").detach();
      $(".img-frame-cap4").show();

      $("button").on("click", function(){
        hpLevel -= defenderCounterAttackPower[0];
        newAttackPower += attackPower;
        defenderHP[0] -= newAttackPower;
        $(".img-frame-cap2 .HP").html(hpLevel);
        $(".img-frame-cap4 .HP").html(defenderHP[0]);


      
        
      })
    
    })

    $(".img-frame-cap3-2").on("click", function(){
      $(".img-frame-cap4 img").attr("src", defenderImage[1]);
      $(".img-frame-cap4 .CharacterName").html(defenderNmae[1]);
      $(".img-frame-cap4 .HP").html(defenderHP[1]);
      $(".img-frame-cap3-2").detach();
      $(".img-frame-cap4").show();
    })

    $(".img-frame-cap3-3").on("click", function(){
      $(".img-frame-cap4 img").attr("src", defenderImage[2]);
      $(".img-frame-cap4 .CharacterName").html(defenderNmae[2]);
      $(".img-frame-cap4 .HP").html(defenderHP[2]);
      $(".img-frame-cap3-3").detach();
      $(".img-frame-cap4").show();
    })
  
  

  });


  
  



})

