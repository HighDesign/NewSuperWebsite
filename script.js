// get the technology dropdown menu
var technologyDropdown = document.getElementById("technology-dropdown");

// add event listener to show/hide the appropriate section
technologyDropdown.addEventListener("change", function() {
  // get the selected value
  var selectedValue = technologyDropdown.value;
  
  // hide all sections with class "hidden"
  var sections = document.querySelectorAll(".hidden");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  
  // show the selected section
  if (selectedValue) {
    var selectedSection = document.querySelector(selectedValue);
    selectedSection.style.display = "block";
  }
});
