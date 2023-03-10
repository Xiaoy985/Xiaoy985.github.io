fetch("items.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let item of items){
      out += `
         <div class="menu-item">
            <div>${item.Chinese_name}</div>
            <div>${item.Dim_Sum_name}</div>
            <div>${item.Price}</div>
         </div>
      `;
   }
 
   placeholder.innerHTML = out;
});
