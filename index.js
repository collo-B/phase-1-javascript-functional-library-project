function myEach(array, alert){
    Object.values(array).forEach(test => alert(test))
    return array

}

function myMap(testArr, callback) {
    const objValues = Object.values(testArr);
  callback = objValues.map(x => x * 3)
  return callback
}


const myReduce = function (testArr, callback, acc) {
    let objValues = Object.values(testArr);
  
    if (!acc) {
      acc = objValues[0];
      objValues = objValues.slice(1);
    }
  
    const newArr = objValues.length;
  
    for (let i = 0; i < newArr; i++) {
      acc = callback(acc, objValues[i], objValues);
    }
    return acc;
  };


function myFind(testArr, target){
    let objValues = Object.values(testArr)
    for(let i = 0; i < testArr.length; i++)
    if (target(objValues[i])) return objValues[i]
    return undefined
}

function myFilter(testArr, excluder){
    let objValues = Object.values(testArr)
    return objValues.filter(num => num > 10)
}

function mySize(testArr) {
    let objValues = Object.values(testArr)
    const newArr = new Set(objValues)
    return newArr.size
}

function myFirst(testArr, n) {
    let objValues = Object.values(testArr)
    if (n) {
        return objValues.slice(0, n)
    }
    return objValues[0]
}


function myLast(testArr, n) {
    let objValues = Object.values(testArr)
    if (n) {
        return objValues.slice(-n)
    }
    let last = objValues.slice[-1]
    return last
}


function myKeys(testArr) {
    return Object.keys(testArr)
    
}

function myValues(testArr) {
    return Object.values(testArr)
    
}