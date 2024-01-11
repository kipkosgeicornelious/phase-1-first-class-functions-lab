

const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => (value) => value * multiplier;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers);
}
const drivers = ["Antonia', 'Nuru', 'Amari', 'Mo"];
const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log("First Two Drivers:", firstTwoDrivers);
const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log("Last Two Drivers:", lastTwoDrivers);

