// Code your solution in this file!
//returns the first two divers of our array 
 const returnFirstTwoDrivers = function(driversArray)
{
    return driversArray.slice(0,2);
}
 const scuberdrivers = ['Antoia','Nuru','Amari','Mo'];
 const FirstTwoDivers = returnFirstTwoDrivers(scuberdrivers);
 console.log(FirstTwoDivers)

 //Array to return the last two divers in our array
 const returnLastTwoDrivers = function (driversArray){
    return driversArray.slice(-2);
   
 }
 const LastTwoDrivers = returnLastTwoDrivers(scuberdrivers);
 console.log(LastTwoDrivers)
    
//containing thetwo functions
//defining our functions returnFirstTwoDrivers and returnLastTwoDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];//creates our array  with the two functions as its element

const FirstTwoDriversFromSelecting = selectingDrivers[0](scuberdrivers)
const LastTwoDriversFromSelecting  = selectingDrivers[1](scuberdrivers)

//creating a fare multiplier
function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
// Function to return the first two drivers
function returnFirstTwoDrivers(driversArray) {
    return driversArray.slice(0, 2);
  }
  
  // Function to return the last two drivers
  function returnLastTwoDrivers(driversArray) {
    return driversArray.slice(-2);
  }
  
  function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
    return selectingFunction(arrayOfDrivers);
  }
  
  // Test the function with returnFirstTwoDrivers and returnLastTwoDrivers
  
  
  const firstTwoDrivers = selectDifferentDrivers(scuberdrivers, returnFirstTwoDrivers);
  console.log(firstTwoDrivers); // Output: ['Antoia', 'Nuru']
  
  const lastTwoDrivers = selectDifferentDrivers(scuberdrivers, returnLastTwoDrivers);
  console.log(lastTwoDrivers); // Output: ['Amari', 'Mo']
 

