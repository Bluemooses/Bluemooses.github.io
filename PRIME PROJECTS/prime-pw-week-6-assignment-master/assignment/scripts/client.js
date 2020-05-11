$(document).ready(pageReady);

let garage = [];
const maxSpaces = 3;


//puts cars into garage
function newCar( yearIn, makeIn, modelIn, pictureIn ){
  console.log( 'in newCar:', yearIn, makeIn, modelIn, pictureIn );
  let newCarObject = {
    year: yearIn,
    make: makeIn,
    model: modelIn,
    image: pictureIn,
  }
  garage.push(newCarObject);
  return true;
} // end newCar
