/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* TODO: Add a variable to store the "my-list" element */
var fullItemListOne = document.getElementById("listone");
var fullItemListTwo = document.getElementById("listtwo");


if (fullItemListOne) {
  fullItemListOne.addEventListener("click", checkOffItem, false);
}
if (fullItemListTwo) {
  fullItemListTwo.addEventListener("click", checkOffItem, false);
}

function checkOffItem(clicked) {
    if (clicked.target.tagName == "LI") {
      clicked.target.classList.toggle("all-done");
    }
}

