import { log } from "console";

// const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
// const names = [2,2,1,3,3,4,4,5,6,6];

// const countedNames = names.reduce((allNames, name) => {
//     console.log(name);
//     console.log(allNames);
//   const currCount = allNames[name] ?? 0;
//   return {
//     ...allNames,
//     [name]: currCount + 1,
//   };
// }, {});

// console.log(countedNames);


// const testObj = {
//     name: 3,
//     sex: "male",
//     name: 2,
// }

// console.log(testObj["name"]);

// console.log(names.sort().filter((el,i) => names[i] == names[i+1]));

// const testArr = [2,2,3,3,4,1] // newArr = [2,1]

// function solution(arr){
//     let newArr = [...new Set(arr)]
//     let answer 
//     for (let i = 0; i < newArr.length; i++) {
//         const result = arr.filter(el => el === newArr[i])
//         console.log(result);
//         if (result.length < 2) {
//             return  answer = newArr[i]
//         }
//     }

//     return answer
// }

// console.log(solution(testArr));

// const filterDuplicates = (arr) => {
//     let duplicates = [];
//     let nonDuplicates = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       // 1)Check if the number already exists in the nonDuplicate array
//       if (nonDuplicates.includes(arr[i])) {
//         // 2)if it exists remove it from the nonDuplicate array
//         nonDuplicates = nonDuplicates.filter((item) => item !== arr[i]);
//         //   3) add it to the duplicates array
//         duplicates.push(arr[i]);
//       } else if (!duplicates.includes(arr[i])) {
//         // 4) Check if the number is not part of the duplicates array, then add it to the nonDuplicates
//         nonDuplicates.push(arr[i]);
//       }
//     }
//     return nonDuplicates;
//   };

// console.log(filterDuplicates(testArr));



// console.log([1,2,3].includes([1,2]));

// let arr1 = [1,2,3]
// let arr2 = [2,3,4]

// function findDifference(numArr1, numArr2){
//    let resultOne = numArr1.filter(el => !numArr2.includes(el))
//    let resultTwo = numArr2.filter(el => !numArr1.includes(el))
//    return [ [...new Set(resultOne)],[...new Set(resultTwo)]]
// }

// let finalAnswer = findDifference([1,2,3,3], [1,1,2,2])
// console.log(finalAnswer);


// function* generatorFunc(){
//     console.log("1. code before first yield");
//     yield 100;

//    console.log("2. code before the second yield");
//     yield 200;

//     console.log("3. code after the second yield");
//     return "done"
// }

// const generator = generatorFunc();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

function* generatorFunc(){
    let count = 1;

    while(count < 4){
        yield count
        count++
    }
}

const generator = generatorFunc()

for(let value of generator){
    console.log(value)
}

function* countUp(limit){
    let count = 1;

    while(count <= limit){
        yield count
        count++
    }
}

const counter = countUp(5)

for(let value of counter){
    console.log(value)
}

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

