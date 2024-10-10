const driversList = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const driversWithDetails = [
  { name: 'Bobby', hometown: 'Pittsburgh' },
  { name: 'Sammy', hometown: 'New York' },
  { name: 'Sally', hometown: 'Cleveland' },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby', hometown: 'Tampa Bay' }
];

const findMatching = (drivers, name) => drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase());

const fuzzyMatch = (drivers, letters) => drivers.filter((driver) => driver.startsWith(letters));

const matchName = (drivers, name) => drivers.filter((driver) => driver.name === name);

  matchingDrivers: findMatching(driversList, 'Bobby'),
  fuzzyDrivers; fuzzyMatch(driversList, 'Sa'),
  matchedDriversWithName; matchName(driversWithDetails, 'Bobby')
;
