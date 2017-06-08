var nameCat1 = "Garfield";
var nameCat2 = "Puff";
var cat1Image = $(".cat1");
var cat2Image = $(".cat2");
var counterClickDivCat1 = $(".count_click_cat1");
var counterClickDivCat2 = $(".count_click_cat2");
var counterClicksCat1 = 0;
var counterClicksCat2 = 0;
var emojiSad = "😞";
var emojiSmile = "😊";
var emojiSuperSmile = "😁";

//show the names of the Cats
$("#cat1").prepend("<h3>" + nameCat1 + "</h3>");
$("#cat2").prepend("<h3>" + nameCat2 + "</h3>");

//Show this texts When have not cliks
if(counterClicksCat1 === 0) {
  counterClickDivCat1.text("No cliks Yet " + emojiSad);
}
if (counterClicksCat2 === 0 ) {
  counterClickDivCat2.text("No cliks Yet " + emojiSad);
}

//Show numbers of cliks each cat had
cat1Image.click(function(){
  counterClickDivCat1.text("You clicked " + counterClicksCat1++ + " times! " + (counterClicksCat1 > 10 ? emojiSuperSmile : emojiSmile));
});

cat2Image.click(function(){
  counterClickDivCat2.text("You clicked " + counterClicksCat2++ + " times! " + (counterClicksCat2 > 10 ? emojiSuperSmile : emojiSmile));
});
