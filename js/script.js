$(function(){
  var counterClickDivCat = $(".count_click_cat");
  var emojiSad = "😞";
  var emojiSmile = "😊";
  var emojiSuperSmile = "😁";

    var model = {
        listOfCats: [],
        currentCat: '',
        init: function(){
            var Cat = function(name, image){
              this.name = name;
              this.counterClicksCat = 0;
              this.image = image;
          };
          listOfCats = [
            new Cat("Chani", "images/cat1.jpg"),
            new Cat("PUff", "images/cat2.jpg"),
            new Cat("Garfield", "images/cat3.jpg"),
            new Cat("Pill", "images/cat4.jpeg"),
            new Cat("Cutee", "images/cat5.jpg")
          ];
        },
        getListOfCats: function(){
          return listOfCats;
        }

  };

var octopus = {
  getCat: function(catName) {
    var listCats = this.getCats();
    pos = listCats.map(function(e) { return e.name; });
    return listCats[pos.indexOf(catName)];
  },
  getCats: function () {
    return model.getListOfCats();
  },

  getCurrentCat: function(){
    return model.currentCat;
  },

  setCurrentCat: function(catObj){
    model.currentCat = catObj;
  },

  updateCat: function(cat, name, urlImage, clicks){
    var oldCat = this.getCat(cat.name);
    oldCat.name = name;
    oldCat.image = urlImage;
    oldCat.counterClicksCat = clicks;
    var newCat = oldCat;
    this.setCurrentCat(newCat);
  },

  addClick: function(catObj){
    catObj.counterClicksCat++;
  },

  init: function(){
    model.init();
    viewListCats.init();
    viewImageCat.init();
    viewAdmin.init();
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
                      octopus.setCurrentCat(cat);
                };
            })(cat.name));
        });
  }
};

var viewImageCat = {
  init: function(){

    $(".img_content").prepend("<h4> Select the Cat on the List </h4>");

    $("#cat img").click(function(){
      var cat = octopus.getCurrentCat();
      octopus.addClick(cat);
      viewImageCat.render(cat);
    });
  },
  render: function(catObj){
    $(".img_content h4").remove();
    $("#cat h3").text(catObj.name);
    $(".img_content>img")
      .attr("src",catObj.image)
      .attr("alt","Image of Cute Cat called " + catObj.name)
      .removeClass()
      .addClass(catObj.name);

    if(catObj.counterClicksCat == 0) {
      counterClickDivCat.text("No cliks Yet " + emojiSad);
    } else {
      counterClickDivCat.text("You clicked " + catObj.counterClicksCat + " times! " + (catObj.counterClicksCat > 10 ? emojiSuperSmile : emojiSmile));
    }

    viewAdmin.render(catObj);

  }
};

var viewAdmin = {
  init: function(){
    $("button[name='admin-btn']").click(function(){
      $("#admin-area").toggleClass("hidden");
      var cat = octopus.getCurrentCat();
      viewAdmin.render(cat);
    });

    $("button[name='cancel-btn']").click(function(){
      $("#admin-area").toggleClass("hidden");
    });

    $("button[name='save-btn']").click(function(){
      var cat = octopus.getCurrentCat();
      var newName = $("input[name='cat-name']").val();
      var newUrlImage = $("input[name='cat-url']").val();
      var newNClicks = $("input[name='cat-clicks']").val();
      octopus.updateCat(cat, newName, newUrlImage, newNClicks);
      viewImageCat.render(octopus.getCurrentCat());
    });
  },
  render: function(catObj){
    if ($("#admin-btn").hasClass("hidden")) {
      $("#admin-btn").removeClass("hidden");
    }

    $("input[name='cat-name']").val(catObj.name);
    $("input[name='cat-url']").val(catObj.image);
    $("input[name='cat-clicks']").val(catObj.counterClicksCat);

  }
}

octopus.init();

});
