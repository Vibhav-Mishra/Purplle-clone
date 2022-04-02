
// 1st slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1000); // Change image every 2 seconds
}


// 1st Vala


var mensData = JSON.parse(localStorage.getItem("bestsellers"));

console.log(mensData)

mensData.map(function (element) {

  let Big_div = document.createElement("div")
  Big_div.setAttribute("id","Big1")

  var div = document.createElement("div");
  div.setAttribute("class", "card");
  var img = document.createElement("img");
  img.setAttribute("class", "card-img");
  img.setAttribute("src", element.image);

  img.style.width="200px";
  img.style.height="200px";
  img.style.marginBottom = "0px";
  img.id="image"
  div.append(img);
  let content_div = document.createElement("div")

  let p = document.createElement("p")

   p.innerText = element.name;

   p.id ="name"
   p.style.fontFamily = "sans-serif";
   p.style.fontWeight = "lighter"
   p.style.fontSize = "14px"
   p.style.color = "#a1abb0";
   p.style.overflow = "hidden";
   p.style.marginTop = "0px";

  let price = document.createElement("p")

  price.innerText = element.price;

  price.id = "price"



let btn = document.createElement("button")
btn.id="button"
btn.innerText="Add To Cart"

btn.addEventListener("click",function(){

  addtocart(element)
})

  content_div.append(p,price)

  Big_div.append(div,content_div,btn)

  document.querySelector("#container .glider").append(Big_div);
});

let cart = JSON.parse(localStorage.getItem("Add")) || [];

function addtocart(element){
  

  console.log(element)


  let img = document.getElementById("image").src;


  let p = document.getElementById("name").innerText;

  let price = document.getElementById("price").innerText;


  

 let obj = {

  name :p,
  price:price,
  image:img
 }
cart.push(obj)

console.log(cart)
 localStorage.setItem("Add",JSON.stringify(cart))

}



new Glider(document.querySelector("#container .glider"), {
  slidesToShow: 5,
  slidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: "#container .glider-prev",
    next: "#container .glider-next",
  },
});


// 2nd vala==
 
let shop_by_category= JSON.parse(localStorage.getItem("shop-by_category"))


shop_by_category.map(function (element) {
  var div = document.createElement("div");
  div.setAttribute("class", "card");
  var img = document.createElement("img");
  img.setAttribute("class", "card-img");
  img.setAttribute("src", element.image);
  div.append(img);
  img.style.width = "290px";
  img.style.height = "380px";
  
  document.querySelector("#container1 .glider").append(div);
});

new Glider(document.querySelector("#container1 .glider"), {
  slidesToShow: 4,
  slidesToScroll: 4,
  draggable: true,
  arrows: {
    prev: "#container1 .glider-prev",
    next: "#container1 .glider-next",
  },
});



// 4th vala

let shop_by_ingredients = JSON.parse(localStorage.getItem("shop_by_ingredients"))
shop_by_ingredients.map(function (element) {
  let Big_div = document.createElement("div")
  Big_div.setAttribute("id","Big")

  var div = document.createElement("div");
  div.setAttribute("class", "card");
  var img = document.createElement("img");
  img.setAttribute("class", "card-img");
  img.setAttribute("src", element.image);
  div.append(img);
  img.style.width="220px";
  img.style.height="220px";


  Big_div.append(img)

  document.querySelector("#container2 .glider").append(Big_div);
});

new Glider(document.querySelector("#container2 .glider"), {
  slidesToShow: 4,
  slidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: "#container2 .glider-prev",
    next: "#container2 .glider-next",
  },
});


// 5th vala

let shop_by_concerns = JSON.parse(localStorage.getItem("shop_by_concerns"))

shop_by_concerns.map(function(element){
  var div =document.createElement("div");
  div.setAttribute("class", "card");
  var img = document.createElement("img");
  img.setAttribute("class", "card-img");
  img.setAttribute("src",element.image);
  div.append(img)
  img.style.width = "320px";
  img.style.height = "340px";
  document.querySelector("#container3 .glider").append(div);

})

new Glider(document.querySelector("#container3 .glider"), {
  slidesToShow: 5,
  slidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: "#container3 .glider-prev",
    next: "#container3 .glider-next",
  },
});

// 6th vala

let featured = JSON.parse(localStorage.getItem("featured"))

featured.map(function (element) {
  let Big_div = document.createElement("div")
  Big_div.setAttribute("id","Big3")

  var div = document.createElement("div");
  div.setAttribute("class", "card");
  var img = document.createElement("img");
  img.setAttribute("class", "card-img");
  img.setAttribute("src", element.image);

  img.style.width="200px";
  img.style.height="200px";
  img.style.marginBottom = "0px";
  img.id="image"
  div.append(img);
  let content_div = document.createElement("div")

  let p = document.createElement("p")

   p.innerText = element.name;
   p.id="name"
   p.style.fontFamily = "sans-serif";
   p.style.fontWeight = "lighter"
   p.style.fontSize = "14px"
   p.style.color = "#a1abb0";
   p.style.overflow = "hidden";
   p.style.marginTop = "0px";p.style.fontFamily = "sans-serif";
   p.style.fontWeight = "lighter"
   p.style.fontSize = "14px"
   p.style.color = "#a1abb0";
   p.style.overflow = "hidden";
   p.style.marginTop = "0px";

  let price = document.createElement("p")

  price.id="price"

  price.innerText = element.price;

  let btn = document.createElement("button")

  btn.id="button"

btn.innerText="Add To Cart"
btn.addEventListener("click",function(){

  addtocart(element)
})

  content_div.append(p,price)

  Big_div.append(div,content_div,btn)

  document.querySelector("#container5 .glider").append(Big_div);
});

new Glider(document.querySelector("#container5 .glider"), {
  slidesToShow: 5,
  slidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: "#container5 .glider-prev",
    next: "#container5 .glider-next",
  },
});

// 7th vala

let store = JSON.parse(localStorage.getItem("store"))
store.map(function (element) {
  var div = document.createElement("div");
  div.setAttribute("class", "card");
  var img = document.createElement("img");
  img.setAttribute("class", "card-img");
  img.setAttribute("src", element.image);
  div.append(img);
  document.querySelector("#container6 .glider").append(div);
});

new Glider(document.querySelector("#container6 .glider"), {
  slidesToShow: 6,
  slidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: "#container6 .glider-prev",
    next: "#container6 .glider-next",
  },
});


// 9th vala

let currently_trending = JSON.parse(localStorage.getItem("currently_trending"))

currently_trending.map(function (element) {
  let Big_div = document.createElement("div")
  Big_div.setAttribute("id","Big4")

  var div = document.createElement("div");
  div.setAttribute("class", "card");
  var img = document.createElement("img");
  img.setAttribute("class", "card-img");
  img.setAttribute("src", element.image);

  img.style.width="200px";
  img.style.height="200px";
  img.style.marginBottom = "0px";
  img.id="image"
  div.append(img);
  let content_div = document.createElement("div")

  let p = document.createElement("p")
 
  p.innerText = element.name;
  p.id="name"
  p.style.fontFamily = "sans-serif";
  p.style.fontWeight = "lighter"
  p.style.fontSize = "14px"
  p.style.color = "#a1abb0";
  p.style.overflow = "hidden";
  p.style.marginTop = "0px";p.style.fontFamily = "sans-serif";
  p.style.fontWeight = "lighter"
  p.style.fontSize = "14px"
  p.style.color = "#a1abb0";
  p.style.overflow = "hidden";
  p.style.marginTop = "0px";

  let price = document.createElement("p")
  price.id="price"

  price.innerText = element.price;

  let btn = document.createElement("button")

  btn.id="button"

btn.innerText="Add To Cart"
btn.addEventListener("click",function(){

  addtocart(element)
})

  content_div.append(p,price)

  Big_div.append(div,content_div,btn)

  document.querySelector("#container8 .glider").append(Big_div);
});

new Glider(document.querySelector("#container8 .glider"), {
  slidesToShow: 5,
  slidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: "#container8 .glider-prev",
    next: "#container8 .glider-next",
  },
});
