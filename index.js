// Your code here

const dodger = document.getElementById("dodger");


// function moveDodgerLeft(left){ 
//     dodger.style.left = `${left-1}px`;
// }

// function moveDodgerRight(left){ 
//     dodger.style.left = `${left+1}px`;
// }

// function moveDodger(e) {
//     let leftNumbers = dodger.style.left.replace('px', '');
//     let left = parseInt(leftNumbers, 10)
//     if (left > 0) 
//     if (e.key === "ArrowLeft") {
//         moveDodgerLeft(left)
//     }
//     if (e.key === "ArrowRight") {
//         moveDodgerRight(left)
//     }
// }

// document.addEventListener("keydown", function(e) {
//     moveDodger(e)
// });


function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left + 1}px`
    }
  }
    
    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft") {
        moveDodgerLeft();
        }
        if (e.key === "ArrowRight") {
            moveDodgerRight()
        }
      });