var coll = document.getElementsByClassName("collapsible");
var i;
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        }

// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function myFunction1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}

function myFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}

function myFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}