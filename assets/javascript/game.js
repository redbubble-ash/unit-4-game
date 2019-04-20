var character = [{ name: "DarthVader", image: "assets/images/darthVader.png", HP: 160, attackPower: 20, counterattackPower: 30 },
{ name: "BB8", image: "assets/images/bb8.png", HP: 180, attackPower: 30, counterattackPower: 40 },
{ name: "Yoda", image: "assets/images/yoda.png", HP: 120, attackPower: 10, counterattackPower: 20 },
{ name: "Rey", image: "assets/images/rey.png", HP: 150, attackPower: 10, counterattackPower: 25 }];

var characterImage = "";
var characterName = "";
var hpLevel = 0;
var attackPower = 0;
var newAttackPower = 0;
var t = 0;
var defenderImage = [];
var defenderNmae = [];
var defenderHP = [];
var defenderAttackPower = [];
var defenderCounterAttackPower = [];
var hideFirstSection="";
var hideThirdSection="";
var defenderIndex = -1;


$(document).ready(function () {
  $(".img-frame-cap2").hide();
  hideThirdSection = $(".thirdSection").detach();
  $(".img-frame-cap4").hide();
  $(".restart").hide();

  // choose a fighter by clicking an image
  $(".img-frame-cap").on("click", function () {
    hideFirstSection = $(".firstSection").detach();
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
        defenderHP[t] = character[i].HP;
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
    $("section2").prepend(hideThirdSection);
    
    // loop over img-frame-cap3, update defender element
    $( ".img-frame-cap3" ).each(function( index ) {
      console.log(index);
      $(this).show();
      $(this).attr("dataIndex",index);
      $("img",this).attr("src", defenderImage[index]);
      $(".CharacterName",this).html(defenderNmae[index]);
      $(".HP",this).html(defenderHP[index]);

    });
    

    // choose defender by clicking an image from enemies available list
    $(".img-frame-cap3").on("click", function () {
      defenderIndex=$(this).attr("dataIndex");
      $(".img-frame-cap4 img").attr("src", defenderImage[defenderIndex]);
      $(".img-frame-cap4 .CharacterName").html(defenderNmae[defenderIndex]);
      $(".img-frame-cap4 .HP").html(defenderHP[defenderIndex]);
      $(this).hide();
      $(".img-frame-cap4").show();
    })
      
  

  });

  // click button to attack, only call back when defender has been chosen.* do not place button click call back inside of other click call backs!!
  $("button").on("click", function () {
    if (defenderIndex > -1){
      hpLevel -= defenderCounterAttackPower[defenderIndex];
      newAttackPower += attackPower;
      defenderHP[defenderIndex] -= newAttackPower;
      console.log(hpLevel, newAttackPower, defenderHP[defenderIndex], defenderCounterAttackPower[defenderIndex]);
      $(".img-frame-cap2 .HP").html(hpLevel);
      $(".img-frame-cap4 .HP").html(defenderHP[defenderIndex]);
      if (hpLevel <= 0) {
        $("p").html("You been defeated! Game is over!");
        $(".restart").show();
        $(".restart").on("click",restart);
      }
    }
  })


  function restart() {
    $("section1").prepend(hideFirstSection);
    $(".img-frame-cap2").hide();
    $(".thirdSection").detach();
    $(".img-frame-cap4").hide();
    $(".restart").hide();
    $("p").hide();
    characterImage = "";
    characterName = "";
    hpLevel = 0;
    attackPower = 0;
    newAttackPower = 0;
    t = 0;
    defenderImage = [];
    defenderNmae = [];
    defenderHP = [];
    defenderAttackPower = [];
    defenderCounterAttackPower = [];
    $(".img-frame-cap3").removeAttr("dataIndex");


  }





})

