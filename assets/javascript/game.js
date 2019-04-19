var character=[{name:"darthVader",image:"assets/images/darthVader.png", HP:160 },
               {name:"bb8", image:"assets/images/bb8.png", HP:180 },
               {name:"yoda", image:"assets/images/yoda.png", HP:120 },
               {name:"rey", image:"assets/images/rey.png", HP:150 }]


// click one character
$(document).ready(function(){
    $(".img-frame-cap2").hide();
    $(".img-frame-cap").on("click",function(){
        $(".firstSection").remove();
        // get data-id for the clicked character
        var characterID = $(this).attr("data-id");
        // get image link for the clicked character
        for (i=0;i<character.length;i++){
          if (characterID === character[i].name){
              var characterImage = character[i].image;
            }
          }
        // add image link for the clicked character to your character section
        $(".img-frame-cap2 img").attr({
            "src": characterImage,
            "alt": characterID
    
        });
        $(".img-frame-cap2").show();
    });

    
        




    

})

console.log("check");
var characterID = $(this).attr("data-id");
     