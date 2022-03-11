// Code your solution here  

const findMatching = function(drivers, string) {
    const result = drivers.filter(driversName => driversName.toLowerCase() === string.toLowerCase())
    return result;
}

const fuzzyMatch = function(drivers, string) {
    const result = drivers.filter(driversName => driversName.charAt() === string.charAt())
    return result;
}

const matchName = function(drivers, string) {
    const result = drivers.filter(driversName => driversName.name === string)
    return result
}

const poopers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  const notDrivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];