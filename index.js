function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

//   function moveDodgerRight() {
//     let rightNumbers = dodger.style.right.replace("px", "");
//     let right = parseInt(rightNumbers, 10);
   
//     if (right < 360) {
//       dodger.style.right = `${left + 1}px`;
//     }
//   }

  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }