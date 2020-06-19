//Ex-1


//To create sub array based on same values
createSubArray = (arrayData) => {
    let finalArray = [];
    let tempArray = [];
    let i = 0;
    while(i < arrayData.length) {
         let count = (arrayData.lastIndexOf(arrayData[i]) - arrayData.indexOf(arrayData[i])) + 1;
         tempArray = count === 1 ? arrayData[i] : new Array(count).fill(arrayData[i]);
         finalArray.push(tempArray);
         i = arrayData.lastIndexOf(arrayData[i]) + 1;
    }
    return finalArray;
}

arrangeArray = (arrayData) => {
    let arrayOfNumbers = [...arrayData];
    let arrayOfString = [];
	//To seperate string and numbers in array
    arrayData.forEach((element) => {
        if(typeof(element) === 'string') {
            arrayOfNumbers.splice(arrayOfNumbers.indexOf(element), 1);
            arrayOfString.push(element);
        }
    });
	//To sort array ascending order
    arrayOfNumbers.sort((a,b) => a-b);
    arrayOfString.sort((a,b) => a-b);
	
	//final output
    let finalArray = [createSubArray(arrayOfNumbers), createSubArray(arrayOfString)];
    console.log(finalArray);
    return finalArray
}

arrangeArray([1,'2',4,591,392,'391',2,'5',10,'2','1',1,1,20,20])