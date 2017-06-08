var counterClickDiv = $(".count_click_cat");
var counterClicks = 0;
var emojiSad = "😞";
var emojiSmile = "😊";
var emojiSuperSmile = "😁";

if(counterClicks === 0) {
  counterClickDiv.text("No cliks Yet " + emojiSad);
}

$(".cat_img").click(function(){
  counterClickDiv.text("You clicked " + counterClicks++ + " times! " + (counterClicks > 10 ? emojiSuperSmile : emojiSmile));
});
