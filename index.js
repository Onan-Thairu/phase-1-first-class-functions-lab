const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2)
}

const returnLastTwoDrivers = function (array) {
    return array.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function (num) {
        return num * num
    }
}

// const fareDoubler = function (fare) {
//     return createFareMultiplier(2)
// }

function selectDifferentDrivers(driversArray, func) {
    return func(driversArray)
}