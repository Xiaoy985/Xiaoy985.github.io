fetch("items.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let item of items){
      out += `
      <div class="menu-item" data-origin="${item.Origin}">
         <div class="front"><img src='${item.image}'></div>
         <div class="front">${item.Chinese_name}</div>
         <div class="front">${item.Dim_Sum_name}</div>
         <div class="front">${item.Price}</div>
         <button class="add-to-cart" data-id="${item.id}" data-price="${item.Price}">+</button>
         
      <div class="back" style="display: none;">
         <div><span class="title">Description:</span> ${item.Description}</div>
         <div style="margin-top: 15px;"><span class="title">Origin:</span> ${item.Origin}</div>
         <div style="margin-top: 15px;"><span class="title">Recipe:</span> ${item.recipe}</div>
         <div style="margin-top: 15px;"><span class="title">Serve with:</span> ${item.Serve_with}</div>
         </div>
      </div>
      `;
   }
 
   placeholder.innerHTML = out;

   const originFilter = document.querySelector("#origin-filter");

   originFilter.addEventListener("change", function() {
     const selectedOrigin = originFilter.value;
     const menuItems = document.querySelectorAll(".menu-item");
   
     menuItems.forEach(item => {
       if (selectedOrigin === "" || item.dataset.origin === selectedOrigin || (selectedOrigin === "Southern China" && (item.dataset.origin === "Guangdong, China" || item.dataset.origin === "Shanghai, China" || item.dataset.origin === "Southern China" || item.dataset.origin === "Macau, China" || item.dataset.origin === "Hong Kong, China"))) {
         item.style.display = "block";
       } else {
         item.style.display = "none";
       }
     });
   });

   const searchInput = document.querySelector("#search-input");

   searchInput.addEventListener("keyup", function(event) {
     // Check if enter key was pressed (key code 13)
     if (event.keyCode === 13) {
       const searchText = searchInput.value.trim().toLowerCase();
       const menuItems = document.querySelectorAll(".menu-item");
   
       menuItems.forEach(item => {
         const chineseName = item.querySelector(".front:nth-child(2)").textContent.toLowerCase();
         const dimSumName = item.querySelector(".front:nth-child(3)").textContent.toLowerCase();
   
         if (chineseName.includes(searchText) || dimSumName.includes(searchText)) {
           item.style.display = "block";
         } else {
           item.style.display = "none";
         }
       });
     }
   });


   const addToCartButtons = document.querySelectorAll(".add-to-cart"); // select all add to cart buttons
   
   addToCartButtons.forEach(button => {
      button.addEventListener("click", function() {
         let cartSummary = document.querySelector("#cart-summary"); // select cart summary element
         let currentNumber = Number(cartSummary.innerText); // get current cart summary number
         let id = button.dataset.id; // get id of item from button data attribute
         let price = Number(button.dataset.price); // get price of item from button data attribute
         let newNumber = currentNumber + 1; // calculate new cart summary number
         cartSummary.innerText = newNumber; // update cart summary element with new number
   
       // add item to cart (you will need to implement this function)
         addToCart(id, price);

     });
   });

   
   
   const menuItems = document.querySelectorAll('.menu-item');
   menuItems.forEach(menuItem => {
      const front = menuItem.querySelector('.front');
      const back = menuItem.querySelector('.back');
      const image = menuItem.querySelector('img');
   
      front.addEventListener('click', () => {
         const popup = document.createElement('div');
         const popupContent = document.createElement('div');
         const closeBtn = document.createElement('button');
   
         popup.classList.add('popup');
         popupContent.classList.add('popup-content');
         closeBtn.classList.add('close-btn');
   
         popupContent.innerHTML = back.innerHTML;
         popupContent.appendChild(closeBtn); // add close button to popup content
         popup.appendChild(popupContent);
         document.body.appendChild(popup);
   
         closeBtn.addEventListener('click', () => {
            popup.remove();
       });
     });
   });

   
});