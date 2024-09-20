// Initialize the slide index array and slide ID array
let slideIndex = [1]; // Keeps track of the current slide index for each slide show
let slideId = ["projectSlide"]; // Holds the class name of slides to show

// Show the first slide of the first slide show
showSlides(1, 0);

// Function to change the slide by a certain number
// n: the number of slides to move (positive for next, negative for previous)
// no: the index of the slide show (for multiple slide shows)
function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no); // Update slide index and show the new slide
}

// Function to display the current slide in the specified slide show
// n: the new slide index to show
// no: the index of the slide show (for multiple slide shows)
function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]); // Get all slides for the specified slide show

  // Wrap around if the slide index is greater than the number of slides
  if (n > x.length) {
    slideIndex[no] = 1; // Reset to the first slide if exceeding the number of slides
  }

  // Wrap around if the slide index is less than 1
  if (n < 1) {
    slideIndex[no] = x.length; // Set to the last slide if below 1
  }

  // Hide all slides
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  // Show the current slide
  x[slideIndex[no] - 1].style.display = "block";
}
