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
        let delay = Math.random() * 6000;
        setTimeout(function() {
          image.style.transform = "translate(-50%, -50%) scale(0.8)";
          image.style.opacity = "1";
        }, delay);
        image.style.transitionDelay = (index % 6) * 0.1 + "s";
        });
    }, 0); // Start animation immediately

    // Move out animation
    setTimeout(function() {
    let rows = Array.from(document.querySelectorAll('.image-container'));
    rows.sort(function(a, b) {
        return Math.random() - 0.5;
    }); // Randomize row order
    let delay = 0;
    rows.forEach(function(row, index) {
        setTimeout(function() {
        let direction = Math.random() < 0.5 ? 'move-out' : 'move-out-left';
        row.classList.add(direction);
        }, delay);
        delay += 200; // Delay for next row
    });
  }, 6000); // Start move out animation after 6 seconds
  

    // Redirect to index2.html after animation is complete
    setTimeout(function() {
    // Add transition effect to fade out page
    document.body.style.transition = "opacity 0.5s ease-out";
    document.body.style.opacity = "0";
    setTimeout(function() {
        window.location.href = "index2.html";
    }, 500); // Wait for 0.5s before redirecting
  }, 12000); // Wait for 5s before starting animation
});
