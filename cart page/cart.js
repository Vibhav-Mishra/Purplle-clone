

var data = JSON.parse(localStorage.getItem("addtocart"));

appendData(data);

function appendData(arr, index) {
    console.log(arr)
    
    var mainDiv = document.getElementById("cartItems")
    mainDiv.innerHTML=null;
    arr.forEach((elem) => {
       
      
     let cart=document.createElement("div");
     cart.id="cart"
     let main=document.createElement("div");
     main.id="main"
    
        // main.setAttribute("class","flex")
        // main.setAttribute("class","main")
        
       
       
        let img = document.createElement("img");
        img.src = elem.image;
        img.style.height="80px";
        let name1 = document.createElement("p")
        name1.innerText =elem.name;
        let price = document.createElement("p");
        price.id="price"
        price.textContent = elem.price
         

        

       

        
        ////////////////////////

        main.append(img,name1,price);
//     cart.append(main)
//     mainDiv.append(cart)
//     });
// };
        var saveDiv = document.createElement("div")
        saveDiv.style.display="flex";
        saveDiv.style.justifyContent="space-evenly"
        saveDiv.id="save"
        var h4 = document.createElement("h4");
        h4.textContent = "Save for later";

        var p1 = document.createElement("p");
        
        p1.textContent = "Remove";
        p1.style.cursor="pointer"
        p1.addEventListener("click", () => {
            arr.splice(index, 1);
            localStorage.setItem("addtocart", JSON.stringify(arr));
            appendData(arr);
            totalPrice(arr);
        });
        var p2 = document.createElement("p");
         p2.style.cursor="pointer"
        p2.textContent = "-";

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
        p3.style.cursor="pointer"
        p3.id="count"
        var p4 = document.createElement("p");
        document.getElementById("count").innerText=elem.quant;
        p4.textContent = "+";
        p4.style.cursor="pointer"
        p4.addEventListener("click", () => {
            elem.quant = +p3.innerText + 1;
            localStorage.setItem("addtocart", JSON.stringify(arr));
            appendData(arr);
            totalPrice(arr);
        });
        ///////////////
       
        saveDiv.append(h4, p1, p2, p3, p4);
        cart.append(main, saveDiv)
        mainDiv.append(cart);
      


        // document.getElementById("cart").append(mainDiv)
    });
}



// document.querySelector("#cont-shop").addEventListener("click", function () {
//     location.href = "/product_view_page/product_view.html";
// });

function totalPrice(arr) {
    console.log(arr)
    
         
    total(arr);
    function total(arr) {
        
        var total = 0;
     
    console.log(arr.quant)
        arr.forEach((elem) => {
            
            var sp = elem.price;
            if (elem.quant>1) total= sp*elem.quant;
            else total += +elem.price;
           
        });
        console.log(total)
    // function total(arr) {
       
    //     arr.forEach((elem) => {
    //     if(elem.quant===1)total=elem.price;
    //     if(elem.quant>1)total=elem.price *elem.quant;
           
          
    //     });
       let price = document.getElementById("price");
        price.textContent = "$   " + total + ".00";

        var totalPrice = document.getElementById("totalPrice");
        totalPrice.innerText =
            "$ "+(total);
    }
}

   
            

    
             
           
           
       
       
    
