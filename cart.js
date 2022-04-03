




var data=JSON.parse(localStorage.getItem("addtocart"))
appendData(data);
function appendData(arr, index) {
    var mainDiv = document.getElementById("cartItems");
    mainDiv.innerHTML = null;

    arr.forEach((elem) => {
        var main = document.createElement("div");
        // main.id="cart";
      
        // main.setAttribute("class","flex")
        // main.setAttribute("class","main")
        main.classList.add("flex", "main");
        var imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "img");
        var img = document.createElement("img");
        img.src = elem.image;
        img.setAttribute("width", "100px");
        img.setAttribute("height", "100px");

       

        ;
        /////////////

        imgDiv.append(img);
        
        var content = document.createElement("div");
        
        content.setAttribute("class", "content");
        var p=document.createElement("p")
        p.innerText="Price"
        p.setAttribute("class", "head")
        var price = document.createElement("p");
        price.textContent = elem.price;
        price.setAttribute("class", "end")
        var name = document.createElement("p");
        name.setAttribute("class", "head");
        name.textContent = elem.name;

        content.append(name,p,price);
       
        main.append(imgDiv, content)
        

        var saveDiv = document.createElement("div");
           
        // saveDiv.setAttribute("class","flex")
        console.log(saveDiv.getAttribute("class"));
        // saveDiv.setAttribute("class","second")
        saveDiv.classList.add("flex", "second");

        var h4 = document.createElement("h4");
        h4.textContent = "Save for later";

        var p1 = document.createElement("p");

        p1.textContent = "Delete";

        p1.addEventListener("click", () => {
            arr.splice(index, 1);
            localStorage.setItem("addtocart", JSON.stringify(arr));
            appendData(arr);
            totalPrice(arr);
        });
        var p2 = document.createElement("p");

        p2.textContent = "-";
        p2.style.cursor="pointer";
        if (elem.quant > 1) {
            p2.addEventListener("click", () => {
                elem.quant--;
                localStorage.setItem("addtocart", JSON.stringify(arr));
                appendData(arr);
                totalPrice(arr);
            });
        }
        var p3 = document.createElement("p");

        p3.textContent = elem.quant || 1;

        var p4 = document.createElement("p");

        p4.textContent = "+";
        p4.style.cursor="pointer";
        p4.addEventListener("click", () => {
            elem.quant = +p3.textContent + 1;
            localStorage.setItem("addtocart", JSON.stringify(arr));
            appendData(arr);
            totalPrice(arr);
        });
        ///////////////
        
        saveDiv.append(h4, p1, p2, p3, p4);
        
        mainDiv.append(main,saveDiv);
    });
}

// var pay = []



function totalPrice(arr) {
    var itemCOunt = document.getElementById("count");

    itemCOunt.textContent = data.length;

    total(arr);

    function total(arr) {
        var total = 0;
        arr.forEach((elem) => {
            var sp = Number(elem.price.replace("$", ""));
            if (elem.quant) total += sp * +elem.quant;
            else total += +elem.price;
        });
        var price = document.getElementById("price");
        price.textContent = "$   " + total + ".00";

        var totalPrice = document.getElementById("totalPrice");

        totalPrice.textContent =
            "$ " + (total + +document.getElementById("extra").textContent);


            localStorage.setItem("pay1",JSON.stringify(totalPrice));

    }
}





// document.querySelector("#cont-shop").addEventListener("click", function () {
//     location.href = "/product_view_page/product_view.html";
// });



    
             
           
           
       
       
    
