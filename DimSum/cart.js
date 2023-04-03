fetch("items.json")
  .then(function(response){
     return response.json();
  })
  .then(function(items){
     let placeholder = document.querySelector("#falling-items-container");
     let out = "";
     for(let item of items){
        // 随机生成位置和时间
        let top = Math.floor(Math.random() * (40 - 15 + 1) + 15) + "%";
        let left = Math.floor(Math.random() * (70 - 20 + 1) + 20) + "%";
        let duration = Math.floor(Math.random() * (8 - 4 + 1) + 4) + "s";
        // 生成HTML代码
        out += `
          <img src='${item.image}' class="falling-item"
            style="top:${top}; left:${left}; animation-duration:${duration}">
        `;
     }
     placeholder.innerHTML = out;
  })