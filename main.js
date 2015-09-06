// Exercise 1
// send an alert when milk is clicked
var milk = document.getElementsByTagName('li')[0];

milk.addEventListener("click", function(event) {
    alert("You clicked milk");
    milk.addEventListener("click", function(event) {
        alert("Yum");
    });
});


// Exercise 2
// turn the word "wine" red when clicked
var wine = document.getElementsByTagName('li')[3];

wine.addEventListener("click", function(event) {
    this.style.color = "red";
});


// Exercise 3
// hide the reset button when the mouse rolls over it
var reset = document.getElementById("reset");

reset.addEventListener("mouseenter", function(event) {
    this.style.visibility = 'hidden';
});


// Exercise 4
// change the picture to beer and add 10 of them to the DOM when clicked
var honeyPicture = addEventListener("dblclick", function() {
var honeyPicture = document.getElementById('honey');

    for(var i = 0; i <= 10; i++) {
        var clonedImage = honeyPicture.cloneNode(true);
        honeyPicture.parentElement.appendChild(clonedImage);
    }
});

myNode = document.querySelector('#honey');

myNode.addEventListener("dblclick", function() {
    myNode.src = "./images/beer.jpeg";
});


// Exercise 5
// add the panic.jpeg picture to the DOM on load
var myElement = document.createElement('img');

myElement.src = "./images/panic.jpeg";

var addPicture = document.querySelectorAll('#essentials ul li');
addPicture[0].appendChild(myElement);


// Exercise 6
// turn the word "beer" brown when clicked
var beer = document.getElementsByTagName("li")[4];

beer.addEventListener("click", function() {
    this.style.color = "brown";
});

// Exercise 7
// increase the word "water" and turn it red when the mouse enters the area
var water = document.getElementsByTagName("li")[2];

water.addEventListener("mouseenter", function() {
    this.style.fontSize = "35px";
    this.style.color = "red";
});

//  Exercise 8
// doesn't do anything
// newNode = document.querySelector('#essentials li')[1];

// newNode.addEventListener("click", function () {
//     newNode.innerHTML = "coffee";
// });

// Exercise 9
// adds a paragraph to the DOM
var pNode = document.createElement('p');
var myText = document.createTextNode("I added this paragraph instructing you what to do.");

newNode = document.querySelector('.content');

pNode.appendChild(myText);
newNode.insertBefore(pNode, newNode.childNodes[2]);