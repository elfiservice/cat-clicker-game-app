var counterClickDivCat = $(".count_click_cat");


var emojiSad = "😞";
var emojiSmile = "😊";
var emojiSuperSmile = "😁";

var Cat = function(name, image){
  this.name = name;
  this.counterClicksCat = 0;
  this.image = image;
};

var listOfCats = [
  new Cat("Chani", "cat1.jpg"),
  new Cat("PUff", "cat2.jpg"),
  new Cat("Garfield", "cat3.jpg"),
  new Cat("Pill", "cat4.jpeg"),
  new Cat("Cutee", "cat5.jpg")
];

listOfCats.forEach(function(cat){
    $(".cat-list").append("<li class='cat-" + cat.name + "'>" + cat.name + "</li>");

     $("li.cat-" + cat.name).click((function(nameCopy) {
        return function() {
            // alert(nameCopy);
            $("#cat h3").text(cat.name);
            $(".img_content>img")
              .attr("src","images/" + cat.image)
              .attr("alt","Image of Cute Cat called " + cat.name)
              .removeClass()
              .addClass(cat.name);

              if(cat.counterClicksCat === 0) {
                counterClickDivCat.text("No cliks Yet " + emojiSad);
              } else {
                counterClickDivCat.text("You clicked " + cat.counterClicksCat + " times! " + (cat.counterClicksCat > 10 ? emojiSuperSmile : emojiSmile));
              }

        };
    })(cat.name));


});



$("#cat img").click(function(){
  var classNameCat = $("#cat img").attr("class");
  listOfCats.forEach(function(cat){
    if (cat.name == classNameCat) {
      cat.counterClicksCat++;

      //FAzer uma FUNCAO para o Objeto CAT
      if(cat.counterClicksCat === 0) {
        counterClickDivCat.text("No cliks Yet " + emojiSad);
      } else {
        counterClickDivCat.text("You clicked " + cat.counterClicksCat + " times! " + (cat.counterClicksCat > 10 ? emojiSuperSmile : emojiSmile));
      }
      //
      // console.log(cat.counterClicksCat);
    }
  });
});
