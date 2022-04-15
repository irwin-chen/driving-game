var turnCounter = 0;
var $image = document.querySelector('img');

document.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.key === 'ArrowRight') {
    turnCounter++;
  } else if (event.key === 'ArrowLeft') {
    turnCounter--;
  } else if (event.key === 'ArrowDown') {
    turnCounter += 2;
  }

  if (turnCounter > 3) {
    turnCounter = turnCounter % 4;
  }
  changeDirection();
}

function changeDirection() {

  if (turnCounter === 1) {
    $image.className = 'turn-1';
  } else if (turnCounter === 2) {
    $image.className = 'turn-2';
  } else if (turnCounter === 3 || turnCounter === -1) {
    turnCounter = 3;
    $image.className = 'turn-3';
  } else if (turnCounter === 0) {
    $image.className = 'turn-0';
  }
}
