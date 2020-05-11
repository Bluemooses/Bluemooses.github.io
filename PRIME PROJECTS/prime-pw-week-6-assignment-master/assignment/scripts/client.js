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

  //verify all fields are filled
 if (carYear.length == 0) {
   alert("Please input a year");
 } else if (carMake.length == 0) {
   alert("Please input a make");
 } else if (carModel.length == 0) {
   alert("Please input a model");
 } else {
 //push user input car into garage array with newCar function
   newCar(carYear, carMake, carModel, carImage);
 }
 //disable inputs if garage is full
 garageFull();
 //displays 'garage' on DOM
 displayGarage();
 //clear input fields
  $('#yearInput').val('');
  $('#makeInput').val('');
  $('#modelInput').val('');
  $('#pictureInput').val('');
} //ends addCar



//display cars in garage on page
function displayGarage() {
  console.log('we are in displayGarage');
  let el = $('#garageList');
  //empty
  el.empty();
  //loop through purchases array
  for (car of garage) {
    //add all cars in garage to list in DOM
    el.append('<li>' + car.year + ' ' + car.make + ' ' + car.model + '  <img id="carImage" src="' + car.image + '">'+'</li>')
  }
  //end for loop
}
//end displayGarage

//checks if there are sufficient spaces in the garage
function garageFull() {
  console.log('in garageFull')
  if (garage.length === maxSpaces) {
    $('#yearInput').prop('disabled', true);
    $('#makeInput').prop('disabled', true);
    $('#modelInput').prop('disabled', true);
    $('#pictureInput').prop('disabled', true);
  }
}
//end of garageFull

//to run on page load
function pageReady() {
  console.log('in pageReady');
  //displays all cars in garage in ul upon load
  displayGarage();
  //disable inputs if garage is full
  garageFull();
  //handle click event
  $('#parkCarButton').on('click', addCar);
}
//end pageReady
