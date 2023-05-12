const yearDivs = document.querySelectorAll('.years div');
const projectTypeDivs = document.querySelectorAll('.projectType div');
const boroughDivs = document.querySelectorAll('.borough div');

function handleClick(event) {
   const target = event.target;
   const isAlreadySelected = target.classList.contains('selected');

// Remove selected class from previously selected elements
   yearDivs.forEach(div => div.classList.remove('selected'));
   projectTypeDivs.forEach(div => div.classList.remove('selected'));
   boroughDivs.forEach(div => div.classList.remove('selected'));

// Apply selected class to the current element
   if (!isAlreadySelected) {
      target.classList.add('selected');
   }
}

// Add event listeners to the elements
yearDivs.forEach(div => div.addEventListener('click', handleClick));
projectTypeDivs.forEach(div => div.addEventListener('click', handleClick));
boroughDivs.forEach(div => div.addEventListener('click', handleClick));

//cursor change
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
   cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});


//json file
fetch("items.json")
.then(function(response) {
   return response.json();
   })
.then(function(items) {
   let placeholder = document.querySelector("#data-output");
   let out = "";

   
   // function to filter items by year
   function filterByYear(year) {
      return items.filter(function(item) {
         return item.Year === year;
      });
   }

   // function to filter items by project type
   function filterByProjectType(projectType) {
      return items.filter(function(item) {
         return item.ProjectType === projectType;
      });
   }

   // function to filter items by borough
   function filterByBorough(borough) {
      return items.filter(function(item) {
         return item.Borough === borough;
      });
   }

      // function to display all the images
      function displayAll() {
      let out = "";
      for (let item of items) {
         out += `
         <div class="bigClass">
            <div class="image-container">
               <img id="image-${item.ID}" src="${item.Image}" alt="Masked Image">
            </div>
            <div class="content-container" style="display:none;">
               <div><span class="title">Year: </span>${item.Year}</div>
               <div><span class="title">Title: </span>${item.Title}</div>
               <div><span class="title">Artist: </span>${item.Artist}</div>
               <div><span class="title">Site Location: </span>${item.SiteLocation}</div>
               <div><span class="title">Borough: </span>${item.Borough}</div>
               <div><span class="title">Project Type: </span>${item.ProjectType}</div>
            </div>
         </div>  
         `;
      }
      placeholder.innerHTML = out;


      // event listener for image containers
      let imageContainers = document.querySelectorAll(".image-container");
      imageContainers.forEach(function(container) {
         let contentContainer = container.querySelector(".content-container");
         let image = container.querySelector("img");
         image.addEventListener("click", function() {
            contentContainer.style.display = "block";
         });
      });
   }

   // call the displayAll function at the beginning
   displayAll();
   
   
   // event listener for years divs  
   let yearDivs = document.querySelectorAll(".years > div");
   yearDivs.forEach(function(div) {
      div.addEventListener("click", function() {
         let year = parseInt(this.textContent);
         let filteredItems = filterByYear(year);
         let out = "";
         for (let item of filteredItems) {
            out += `
            <div class="bigClass">
            <div class="image-container">
               <img id="image-${item.ID}" src="${item.Image}" alt="Masked Image">
            </div>
            <div class="content-container" style="display:none;">
               <div><span class="title">Year: </span>${item.Year}</div>
               <div><span class="title">Title: </span>${item.Title}</div>
               <div><span class="title">Artist: </span>${item.Artist}</div>
               <div><span class="title">Site Location: </span>${item.SiteLocation}</div>
               <div><span class="title">Borough: </span>${item.Borough}</div>
               <div><span class="title">Project Type: </span>${item.ProjectType}</div>
            </div>
         </div>  
            `;
         }
         placeholder.innerHTML = out;

         // event listener for image containers
         let imageContainers = document.querySelectorAll(".image-container");
         imageContainers.forEach(function(container) {
            let contentContainer = container.querySelector(".content-container");
            let image = container.querySelector("img");
            image.addEventListener("click", function() {
               contentContainer.style.display = "block";
            });
         });
      });
   });

   // event listener for project type divs
   let projectTypeDivs = document.querySelectorAll(".projectType > div");
   projectTypeDivs.forEach(function(div) {
      div.addEventListener("click", function() {
         let projectType = this.textContent;
         let filteredItems = filterByProjectType(projectType);
         let out = "";
         for (let item of filteredItems) {
            out += `
            <div class="bigClass">
            <div class="image-container">
               <img id="image-${item.ID}" src="${item.Image}" alt="Masked Image">
            </div>
            <div class="content-container" style="display:none;">
               <div><span class="title">Year: </span>${item.Year}</div>
               <div><span class="title">Title: </span>${item.Title}</div>
               <div><span class="title">Artist: </span>${item.Artist}</div>
               <div><span class="title">Site Location: </span>${item.SiteLocation}</div>
               <div><span class="title">Borough: </span>${item.Borough}</div>
               <div><span class="title">Project Type: </span>${item.ProjectType}</div>
            </div>
         </div>   
            `;
         }
         placeholder.innerHTML = out;

         // event listener for image containers
         let imageContainers = document.querySelectorAll(".image-container");
         imageContainers.forEach(function(container) {
            let contentContainer = container.querySelector(".content-container");
            let image = container.querySelector("img");
            image.addEventListener("click", function() {
               contentContainer.style.display = "block";
            });
         });
      });
   });

   // event listener for borough divs
   let boroughDivs = document.querySelectorAll(".borough > div");
   boroughDivs.forEach(function(div) {
      div.addEventListener("click", function() {
         let borough = this.textContent.trim();
         let filteredItems = filterByBorough(borough);
         let out = "";
         for (let item of filteredItems) {
            out += `
            <div class="bigClass">
            <div class="image-container">
               <img id="image-${item.ID}" src="${item.Image}" alt="Masked Image">
            </div>
            <div class="content-container" style="display:none;">
               <div><span class="title">Year: </span>${item.Year}</div>
               <div><span class="title">Title: </span>${item.Title}</div>
               <div><span class="title">Artist: </span>${item.Artist}</div>
               <div><span class="title">Site Location: </span>${item.SiteLocation}</div>
               <div><span class="title">Borough: </span>${item.Borough}</div>
               <div><span class="title">Project Type: </span>${item.ProjectType}</div>
            </div>
         </div>  
            `;
         }
         placeholder.innerHTML = out;

         // event listener for image containers
         let imageContainers = document.querySelectorAll(".image-container");
         imageContainers.forEach(function(container) {
            let contentContainer = container.querySelector(".content-container");
            let image = container.querySelector("img");
            image.addEventListener("click", function() {
               contentContainer.style.display = "block";
            });
         });
      });
   });




});
