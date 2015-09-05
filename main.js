// Exercise 1
var milk = document.getElementsByTagName('li')[0];

milk.addEventListener("click", function(event) {
    alert("You clicked milk");
    milk.addEventListener("click", function(event) {
        alert("You really shouldn't drink milk");
    });
});

// Exercise 2
var wine = document.getElementsByTagName('li')[3];

wine.addEventListener("click", function(event) {
    this.style.color = "red";
});

// Exercise 3
var reset = document.getElementById("reset");

reset.addEventListener("mouseenter", function(event) {
    this.style.visibility = 'hidden';
});


// Exercise 4
var honeyPicture = addEventListener("dblclick", function() {
 var honeyPicture = document.getElementById('honey');

    for(var i = 0; i <= 10; i++) {
        var clonedImage = honeyPicture.cloneNode(true);
        honeyPicture.parentElement.appendChild(clonedImage);
    }
});

// Exercise 5
// append the beer picture to the DOM


// Exercise 6
var honey = document.getElementsByTagName("li")[1];

honey.addEventListener("click", function(event) {
    this.element.innerHTML = "buzz buzz";
});

// Exercise 7
var beer = document.getElementsByTagName("li")[4];

beer.addEventListener("click", function() {
    this.style.color = "brown";
});

// Exercise 8
var water = document.getElementsByTagName("li")[2];

water.addEventListener("mouseenter", function() {
    this.style.fontSize = "35px";
    this.style.color = "red";
});
