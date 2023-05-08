fetch("items.json")
.then(function(response){
  return response.json();
})
.then(function(items){
  let placeholder = document.querySelector("#data-output");
  let out = "";
  for(let item of items){
    out += `
      <div class="image-container">
        <img id="image-${item.ID}" src="${item.Image}" alt="Masked Image">
      </div>
    `;
  }
 
  placeholder.innerHTML = out;

  // Add animation class to grid container to fade in and scale up images
  setTimeout(function() {
    placeholder.classList.add("fade-in");
    placeholder.style.opacity = "1";
    placeholder.style.transform = "translateY(0) scale(1)";
    // Scale and fade in images
    let images = document.querySelectorAll(".image-container img");
    images.forEach(function(image, index) {
      // Delay each image randomly within 5s
      let delay = Math.random() * 5000;
      setTimeout(function() {
        image.style.transform = "translate(-50%, -50%) scale(1)";
        image.style.opacity = "1";
      }, delay);
      image.style.transitionDelay = (index % 7) * 0.1 + "s";
    });
  }, 0); // Start animation immediately

  // Redirect to index2.html after animation is complete
  setTimeout(function() {
    // Add transition effect to fade out page
    document.body.style.transition = "opacity 0.5s ease-out";
    document.body.style.opacity = "0";
    setTimeout(function() {
      window.location.href = "index2.html";
    }, 500); // Wait for 0.5s before redirecting
  }, 5000); // Wait for 5s before starting animation
});
