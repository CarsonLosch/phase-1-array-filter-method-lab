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

