$(function(){
  var counterClickDivCat = $(".count_click_cat");
  var emojiSad = "😞";
  var emojiSmile = "😊";
  var emojiSuperSmile = "😁";

    var model = {
        listOfCats: [],
        init: function(){
            var Cat = function(name, image){
              this.name = name;
              this.counterClicksCat = 0;
              this.image = image;
          };
          listOfCats = [
            new Cat("Chani", "cat1.jpg"),
            new Cat("PUff", "cat2.jpg"),
            new Cat("Garfield", "cat3.jpg"),
            new Cat("Pill", "cat4.jpeg"),
            new Cat("Cutee", "cat5.jpg")
          ];
        },
        getListOfCats: function(){
          return listOfCats;
        }

  };

var octopus = {
  getCats: function () {
    return model.getListOfCats();
  },

  addClick: function(catObj){
    catObj.counterClicksCat++;
  },

  init: function(){
    model.init();
    viewListCats.init();
    viewImageCat.init();
  }
};

var viewListCats = {
  init: function(){
    var listOfCatsArr = octopus.getCats();
    listOfCatsArr.forEach(function(cat){
            $(".cat-list").append("<li class='cat-" + cat.name + "'>" + cat.name + "</li>");
             $("li.cat-" + cat.name).click((function(nameCopy) {
                return function() {
                      viewImageCat.render(cat);
                };
            })(cat.name));
        });
  }
};

var viewImageCat = {
  init: function(){
    $("#cat img").click(function(){
      var classNameCat = $("#cat img").attr("class");
      var listOfCatsArr = octopus.getCats();
      listOfCatsArr.forEach(function(cat){
        if (cat.name == classNameCat) {
          octopus.addClick(cat);
          viewImageCat.render(cat);
          //cat.showClicks();
        }
      });
    });
  },
  render: function(catObj){

    $("#cat h3").text(catObj.name);
    $(".img_content>img")
      .attr("src","images/" + catObj.image)
      .attr("alt","Image of Cute Cat called " + catObj.name)
      .removeClass()
      .addClass(catObj.name);

    if(catObj.counterClicksCat === 0) {
      counterClickDivCat.text("No cliks Yet " + emojiSad);
    } else {
      counterClickDivCat.text("You clicked " + catObj.counterClicksCat + " times! " + (catObj.counterClicksCat > 10 ? emojiSuperSmile : emojiSmile));
    }
  }
}

octopus.init();

});
