var character = [{ name: "darthVader", image: "assets/images/darthVader.png", HP: 160 },
{ name: "bb8", image: "assets/images/bb8.png", HP: 180 },
{ name: "yoda", image: "assets/images/yoda.png", HP: 120 },
{ name: "rey", image: "assets/images/rey.png", HP: 150 }];

var defenderImage = ["defenderImage1", "defenderImage2", "defenderImage3"];


// click one character
$(document).ready(function () {
  $(".img-frame-cap2").hide();
  var hideThirdSection = $(".thirdSection").detach();
  $(".img-frame-cap").on("click", function () {
    $(".firstSection").remove();
    // get data-id for the clicked character
    var characterID = $(this).attr("data-id");
    // get image link for the clicked character
    for (i = 0; i < character.length; i++) {
      if (characterID === character[i].name) {
        var characterImage = character[i].image;
      }
      else {
        defenderImage = character[i].image;
      }
    console.log(defenderImage);
    }
    // add image link for the clicked character to your character section
    $(".img-frame-cap2 img").attr({
      "src": characterImage,
      "alt": characterID

    });
    $(".img-frame-cap2").show();

    $(".img-frame-cap3-1 img").attr({
      "src": defenderImage[0],
      "alt": characterID

    });

    $(".img-frame-cap3-2 img").attr({
      "src": defenderImage[1],
      "alt": characterID

    });

    $(".img-frame-cap3-3 img").attr({
      "src": defenderImage[2],
      "alt": characterID

    });
    $("section").prepend(hideThirdSection);















  });









})

