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

function addCar() {
  console.log('we are in addCar');
  //align user input and to variables
  let carYear = $('#yearInput').val();
  let carMake = $('#makeInput').val().toUpperCase();
  let carModel = $('#modelInput').val().toUpperCase();
  let carImage = $('#pictureInput').val();
