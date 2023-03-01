fetch("items.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let item of items){
      out += `
         <tr>
            <td>${item.name}</td>
            <td> <img src='${item.image}'></td>
            <td>${item.article_number}</td>
            <td>${item.price}</td>
            <td>${item.category}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});
