const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2)
}

const returnLastTwoDrivers = function (array) {
    return array.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num2) {
    return function (num) {
        return num * num2
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)



function selectDifferentDrivers(driversArray, func) {
    return func(driversArray)
}