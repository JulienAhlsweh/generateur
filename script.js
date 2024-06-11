// console.log("coucou");


// var background = document.getElementById("bg-generator");
// console.dir(background);

// var text = document.getElementById("text-generator");
// console.dir(text);


// text.addEventListener("mousedown", (event) => {
//   console.log("down")
// });

// text.addEventListener("mouseup", (event) => {
//   console.log("up")
// });


const textBox = document.getElementById("text-generator");
console.log(textBox)
let startX = 0;
let startY = 0;

textBox.addEventListener('mousedown', (event) => {
  console.log("down")
  // Record the initial mouse position when clicking
  startX = event.clientX - textBox.offsetLeft;
  startY = event.clientY - textBox.offsetTop;

  // Add event listeners for mousemove and mouseup to track dragging
  document.addEventListener('mousemove', dragTextBox);
  document.addEventListener('mouseup', stopDragging);
});

function dragTextBox(event) {
  // Calculate the new position of the text box
  const newX = event.clientX - startX;
  const newY = event.clientY - startY;

  // Update the top and left CSS properties
  textBox.style.top = newY + 'px';
  textBox.style.left = newX + 'px';
}

function stopDragging() {
  // Remove the event listeners when dragging stops
  document.removeEventListener('mousemove', dragTextBox);
  document.removeEventListener('mouseup', stopDragging);
}
